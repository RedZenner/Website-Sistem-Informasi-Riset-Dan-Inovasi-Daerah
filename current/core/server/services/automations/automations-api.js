"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.browse = browse;
exports.getNumberOfAutomations = getNumberOfAutomations;
exports.read = read;
exports.readPerformanceStats = readPerformanceStats;
exports.browseRuns = browseRuns;
exports.readRunHistory = readRunHistory;
exports.browseActionLinks = browseActionLinks;
exports.add = add;
exports.edit = edit;
exports.requestPoll = requestPoll;
exports.trigger = trigger;
exports.fetchAndLockSteps = fetchAndLockSteps;
exports.finishStepAndEnqueueNext = finishStepAndEnqueueNext;
exports.markStepTerminal = markStepTerminal;
exports.retryStep = retryStep;
exports.recordEmailSent = recordEmailSent;
exports.getAutomatedEmailRecipientsByMailgunIds = getAutomatedEmailRecipientsByMailgunIds;
exports.trackEmailDeliveredAndOpened = trackEmailDeliveredAndOpened;
exports.trackEmailClicked = trackEmailClicked;
const automation_member_search_1 = require("./automation-member-search");
const automation_run_cursor_1 = require("./automation-run-cursor");
const errors_1 = __importDefault(require("@tryghost/errors"));
const logging_1 = __importDefault(require("@tryghost/logging"));
const tpl_1 = __importDefault(require("@tryghost/tpl"));
const bson_objectid_1 = __importDefault(require("bson-objectid"));
const zod_1 = require("zod");
const database_automations_repository_1 = require("./database-automations-repository");
const fake_wait_hours_multiplier_1 = require("./fake-wait-hours-multiplier");
const tinybird_automation_stats_1 = require("./tinybird-automation-stats");
const automation_entry_stats_1 = require("./automation-entry-stats");
const start_automations_poll_event_1 = require("./events/start-automations-poll-event");
const { knex } = require('../../data/db');
const domainEvents = require('@tryghost/domain-events');
const labs = require('../../../shared/labs');
const config = require('../../../shared/config');
const settingsCache = require('../../../shared/settings-cache');
const requestExternal = require('../../lib/request-external');
const TinybirdServiceWrapper = require('../tinybird');
const { create: createTinybirdClient } = require('../stats/utils/tinybird');
const lexicalLib = require('../../lib/lexical');
const MAX_AUTOMATION_ACTIONS = 50;
const RUN_PAGE_SIZE = 50;
const MAX_WAIT_HOURS = 720; // 30 days
const messages = {
    invalidRunOrder: 'Automation run order must be one of: created_at desc, created_at asc.',
    invalidRunStatus: 'Automation run status must be one of: in_progress, completed, exited_early.',
    tinybirdRunsFailed: 'Could not load Tinybird automation runs.',
    tinybirdEntriesOutsideRange: 'Tinybird returned entries outside the requested range.',
    tinybirdPerformanceStatsFailed: 'Could not load Tinybird automation performance stats.',
    automationNotFound: 'Automation not found.',
    runNotFound: 'Automation run not found.',
    automationActionNotFound: 'Automation action not found.',
    invalidAutomationCreationPayload: 'Invalid automation payload.',
    invalidAutomationEditPayload: 'Automation edit payload must include status, actions, and edges.',
    invalidAutomationStatus: 'Automation status must be one of: active, inactive.',
    duplicateAutomationActionIdentity: 'Automation action identifiers must be unique.',
    invalidAutomationEdgeEndpoint: 'Automation edges must reference actions in the submitted graph.',
    duplicateAutomationEdge: 'Automation edges must be unique.',
    invalidAutomationEdge: 'Automation edges cannot connect an action to itself.',
    invalidAutomationGraphShape: 'Automation graph must be a single linear path without branches or cycles.',
    emptyEmailSubjectWhenActive: 'Active automations require a subject line for every email.',
    emptyEmailBodyWhenActive: 'Active automations require a body for every email.',
    invalidEmailLexical: 'Email lexical must be a well-formed Lexical document.',
};
const objectIdSchema = zod_1.z.string().refine((value) => bson_objectid_1.default.isValid(value));
const waitActionSchema = zod_1.z.object({
    id: objectIdSchema,
    type: zod_1.z.literal('wait'),
    data: zod_1.z.object({
        wait_hours: zod_1.z.number().int().positive().max(MAX_WAIT_HOURS),
    }),
});
const sendEmailActionSchema = zod_1.z.object({
    id: objectIdSchema,
    type: zod_1.z.literal('send_email'),
    data: zod_1.z.object({
        email_subject: zod_1.z.string(),
        email_lexical: zod_1.z.string(),
        email_design_setting_id: zod_1.z.string().min(1),
    }),
});
const edgeSchema = zod_1.z.object({
    source_action_id: objectIdSchema,
    target_action_id: objectIdSchema,
});
const addAutomationMetadataShape = {
    name: zod_1.z.string().trim().min(1).max(191),
    description: zod_1.z.string().trim().max(2000),
};
const addAutomationDataSchema = zod_1.z.discriminatedUnion('trigger_tier_scope', [
    zod_1.z.strictObject({
        ...addAutomationMetadataShape,
        trigger_tier_scope: zod_1.z.enum(['free', 'all_paid']).nullable().optional(),
        trigger_tier_ids: zod_1.z.null().optional(),
    }),
    zod_1.z.strictObject({
        ...addAutomationMetadataShape,
        trigger_tier_scope: zod_1.z.literal('selected_paid'),
        trigger_tier_ids: zod_1.z
            .array(objectIdSchema)
            .min(1)
            .transform((ids) => [...new Set(ids)]),
    }),
]);
const editAutomationDataSchema = zod_1.z
    .object({
    name: zod_1.z.string().trim().min(1).max(191).optional(),
    description: zod_1.z.string().trim().max(2000).optional(),
    status: zod_1.z.enum(['active', 'inactive']),
    actions: zod_1.z
        .array(zod_1.z.discriminatedUnion('type', [waitActionSchema, sendEmailActionSchema]))
        .min(1)
        .max(MAX_AUTOMATION_ACTIONS),
    edges: zod_1.z.array(edgeSchema),
})
    .and(zod_1.z.discriminatedUnion('trigger_tier_scope', [
    zod_1.z.object({
        trigger_tier_scope: zod_1.z.enum(['free', 'all_paid']).nullable().optional(),
        trigger_tier_ids: zod_1.z.null().optional(),
    }),
    zod_1.z.object({
        trigger_tier_scope: zod_1.z.literal('selected_paid'),
        trigger_tier_ids: zod_1.z
            .array(objectIdSchema)
            .min(1)
            .transform((ids) => [...new Set(ids)]),
    }),
]));
const repository = (0, database_automations_repository_1.createDatabaseAutomationsRepository)({
    knex,
    fakeWaitHoursMultiplier: (0, fake_wait_hours_multiplier_1.parseFakeWaitHoursMultiplier)(config.get('automations:fakeWaitHoursMultiplier')),
});
function getTinybirdClient() {
    if (!config.get('tinybird:stats')) {
        return null;
    }
    try {
        const tinybirdService = TinybirdServiceWrapper.instance;
        if (!tinybirdService?.getToken()?.token) {
            return null;
        }
        return createTinybirdClient({
            config,
            // Fall back to MySQL after the first failed attempt.
            request: requestExternal.extend({ retry: { limit: 0 } }),
            settingsCache,
            tinybirdService,
        });
    }
    catch (error) {
        logging_1.default.error('Error preparing Tinybird automation stats client:', error);
        return null;
    }
}
async function browse() {
    const tinybirdClient = getTinybirdClient();
    if (!tinybirdClient) {
        return await repository.browse({ includeStats: true });
    }
    const [browseResult, stats] = await Promise.all([
        repository.browse({ includeStats: false }),
        (0, tinybird_automation_stats_1.fetchAutomationStats)(tinybirdClient),
    ]);
    if (stats === null) {
        return await repository.browse({ includeStats: true });
    }
    return {
        ...browseResult,
        data: browseResult.data.map((automation) => ({
            ...automation,
            stats: stats.get(automation.id) ?? { ...tinybird_automation_stats_1.EMPTY_AUTOMATION_STATS },
        })),
    };
}
async function getNumberOfAutomations() {
    return await repository.getNumberOfAutomations();
}
async function read(automationId) {
    const automation = await repository.getById(automationId);
    if (!automation) {
        throw new errors_1.default.NotFoundError({
            message: (0, tpl_1.default)(messages.automationNotFound),
        });
    }
    return automation;
}
async function readPerformanceStats(automationId, options = {}) {
    const exists = await repository.exists(automationId);
    if (!exists) {
        throw new errors_1.default.NotFoundError({ message: (0, tpl_1.default)(messages.automationNotFound) });
    }
    const client = getTinybirdClient();
    if (!client) {
        throw new errors_1.default.InternalServerError({
            message: (0, tpl_1.default)(messages.tinybirdPerformanceStatsFailed),
        });
    }
    const { timezone, window: requestedWindow } = (0, automation_entry_stats_1.parseEntryStatsOptions)(options);
    const stats = await (0, tinybird_automation_stats_1.fetchAutomationPerformanceStats)(client, automationId, {
        timezone,
        ...(requestedWindow
            ? { dateFrom: requestedWindow.date_from, dateTo: requestedWindow.date_to }
            : {}),
    });
    if (stats === null) {
        throw new errors_1.default.InternalServerError({
            message: (0, tpl_1.default)(messages.tinybirdPerformanceStatsFailed),
        });
    }
    const returnedWindow = (0, automation_entry_stats_1.getEntryStatsWindow)(stats.entries, timezone);
    const entryWindow = requestedWindow
        ? { ...requestedWindow, bucket: returnedWindow.bucket }
        : returnedWindow;
    if (stats.entries.some(({ date }) => {
        const day = (0, automation_entry_stats_1.entryDate)(date, timezone);
        return day < entryWindow.date_from || day >= entryWindow.date_to;
    })) {
        throw new errors_1.default.InternalServerError({ message: (0, tpl_1.default)(messages.tinybirdEntriesOutsideRange) });
    }
    return {
        automation_id: automationId,
        ...stats,
        entry_window: entryWindow,
    };
}
async function browseRuns(automationId, options = {}) {
    const { status, order, cursor } = options;
    const query = (0, automation_member_search_1.normalizeMemberSearch)(options.search);
    // Initial member search spans all time and statuses; browse filters stay independent.
    const { window: entryWindow, timezone } = (0, automation_entry_stats_1.parseEntryStatsOptions)(query ? {} : options);
    const parsedStatus = zod_1.z
        .enum(['in_progress', 'completed', 'exited_early'])
        .optional()
        .safeParse(query ? undefined : status);
    if (!parsedStatus.success) {
        throw new errors_1.default.ValidationError({
            message: (0, tpl_1.default)(messages.invalidRunStatus),
        });
    }
    const parsedOrder = zod_1.z.enum(['created_at desc', 'created_at asc']).optional().safeParse(order);
    if (!parsedOrder.success) {
        throw new errors_1.default.ValidationError({
            message: (0, tpl_1.default)(messages.invalidRunOrder),
        });
    }
    const requestedScope = {
        automation_id: automationId,
        date_from: entryWindow?.date_from ?? null,
        date_to: entryWindow?.date_to ?? null,
        timezone,
        status: parsedStatus.data ?? null,
        direction: parsedOrder.data === 'created_at asc' ? 'asc' : 'desc',
    };
    const searchScope = query
        ? (0, automation_member_search_1.searchCursorScope)(requestedScope, config.get('tinybird:stats:id') || settingsCache.get('site_uuid'), query)
        : undefined;
    const continuation = cursor === undefined
        ? undefined
        : (0, automation_run_cursor_1.decodeRunCursor)(cursor, searchScope ?? requestedScope, {
            preserveEndDate: !query && options.date_to === undefined,
        });
    const scope = continuation?.scope ?? requestedScope;
    const exists = await repository.exists(automationId);
    if (!exists) {
        throw new errors_1.default.NotFoundError({ message: (0, tpl_1.default)(messages.automationNotFound) });
    }
    const client = getTinybirdClient();
    if (!client) {
        throw new errors_1.default.InternalServerError({ message: (0, tpl_1.default)(messages.tinybirdRunsFailed) });
    }
    if (searchScope) {
        return (0, automation_member_search_1.browseMemberSearch)(repository, client, searchScope, query, continuation?.position);
    }
    // One extra row tells us whether a next page exists without a separate count.
    const rows = await (0, tinybird_automation_stats_1.fetchAutomationRuns)(client, automationId, {
        status: parsedStatus.data,
        direction: scope.direction,
        limit: RUN_PAGE_SIZE + 1,
        timezone,
        dateFrom: scope.date_from ?? undefined,
        dateTo: scope.date_to ?? undefined,
        after: continuation?.position,
    });
    if (rows === null) {
        throw new errors_1.default.InternalServerError({ message: (0, tpl_1.default)(messages.tinybirdRunsFailed) });
    }
    const runs = rows.slice(0, RUN_PAGE_SIZE);
    const nextCursor = rows.length > RUN_PAGE_SIZE ? (0, automation_run_cursor_1.encodeRunCursor)(scope, runs[runs.length - 1]) : null;
    // Keep member details in Core; a deleted member must not remove a run from this page.
    const members = await repository.getRunMembers(automationId, runs.map((run) => run.id));
    return {
        data: runs.map((run) => ({ ...run, member: members.get(run.id) ?? null })),
        meta: { pagination: { limit: RUN_PAGE_SIZE, next_cursor: nextCursor } },
    };
}
async function readRunHistory(automationId, runId) {
    const exists = await repository.exists(automationId);
    if (!exists) {
        throw new errors_1.default.NotFoundError({ message: (0, tpl_1.default)(messages.automationNotFound) });
    }
    const history = await repository.getRunHistory(automationId, runId);
    if (!history) {
        throw new errors_1.default.NotFoundError({ message: (0, tpl_1.default)(messages.runNotFound) });
    }
    return history;
}
async function browseActionLinks(automationId, actionId) {
    const links = await repository.getAutomationActionLinks(automationId, actionId);
    if (!links) {
        throw new errors_1.default.NotFoundError({
            message: (0, tpl_1.default)(messages.automationActionNotFound),
        });
    }
    return links;
}
async function add(data) {
    const result = addAutomationDataSchema.safeParse(data);
    if (!result.success) {
        const issue = result.error.issues[0];
        throwValidationError(buildInvalidAutomationPayloadMessage(result.error.issues, messages.invalidAutomationCreationPayload), String(issue.path[0] ?? 'automations'));
    }
    return await repository.add(result.data);
}
async function edit(automationId, data) {
    const parsedData = await validateEditData(data);
    const automation = await repository.edit(automationId, parsedData);
    if (!automation) {
        throw new errors_1.default.NotFoundError({
            message: (0, tpl_1.default)(messages.automationNotFound),
        });
    }
    return automation;
}
async function validateEditData(data) {
    const result = editAutomationDataSchema.safeParse(data);
    if (!result.success) {
        if (result.error.issues.some((issue) => issue.path[0] === 'status')) {
            throwValidationError(messages.invalidAutomationStatus, 'status');
        }
        throwValidationError(buildInvalidAutomationPayloadMessage(result.error.issues, messages.invalidAutomationEditPayload));
    }
    validateGraph(result.data.actions, result.data.edges);
    await validateEmailLexical(result.data.actions);
    validateActiveEmailSteps(result.data.status, result.data.actions);
    return result.data;
}
async function validateEmailLexical(actions) {
    await Promise.all(actions.map(async (action) => {
        if (action.type !== 'send_email') {
            return;
        }
        const lexical = action.data.email_lexical;
        // Empty editor documents are valid draft state and are classified by
        // active-body validation below. Invalid JSON is not skipped here.
        if (isValidEmptyLexical(lexical)) {
            return;
        }
        if (isMalformedEmptyLexical(lexical)) {
            throwValidationError(messages.invalidEmailLexical, 'actions');
        }
        if (!(await lexicalLib.validate(lexical))) {
            throwValidationError(messages.invalidEmailLexical, 'actions');
        }
    }));
}
// Drafts may persist empty email steps, but an active automation must have a
// complete subject and body for every email it sends — mirroring the editor's
// publish-time validation.
function validateActiveEmailSteps(status, actions) {
    if (status !== 'active') {
        return;
    }
    for (const action of actions) {
        if (action.type !== 'send_email') {
            continue;
        }
        if (!action.data.email_subject.trim()) {
            throwValidationError(messages.emptyEmailSubjectWhenActive, 'actions');
        }
        if (isEmptyLexical(action.data.email_lexical)) {
            throwValidationError(messages.emptyEmailBodyWhenActive, 'actions');
        }
    }
}
function isEmptyLexical(lexical) {
    try {
        const parsed = JSON.parse(lexical);
        return isEmptyParsedLexical(parsed);
    }
    catch {
        return true;
    }
}
function isValidEmptyLexical(lexical) {
    try {
        return isEmptyParsedLexical(JSON.parse(lexical));
    }
    catch {
        return false;
    }
}
function isMalformedEmptyLexical(lexical) {
    try {
        const children = JSON.parse(lexical)?.root?.children;
        if (!Array.isArray(children) || children.length !== 1 || children[0].type !== 'paragraph') {
            return false;
        }
        return !Array.isArray(children[0].children);
    }
    catch {
        return false;
    }
}
function isEmptyParsedLexical(parsed) {
    const children = parsed?.root?.children;
    if (!Array.isArray(children)) {
        return false;
    }
    if (children.length === 0) {
        return true;
    }
    if (children.length !== 1 || children[0].type !== 'paragraph') {
        return false;
    }
    return Array.isArray(children[0].children) && children[0].children.length === 0;
}
function buildInvalidAutomationPayloadMessage(issues, message) {
    if (!issues.length) {
        return message;
    }
    const issueSummaries = issues.slice(0, 3).map((issue) => {
        const path = issue.path.length ? issue.path.join('.') : 'payload';
        return `${path}: ${issue.message}`;
    });
    return `${message} ${issueSummaries.join('; ')}.`;
}
function validateGraph(actions, edges) {
    const actionIdentities = new Set();
    // Every action in the submitted graph must have a unique ObjectId so edges
    // can refer to a single, unambiguous node.
    for (const action of actions) {
        if (actionIdentities.has(action.id)) {
            throwValidationError(messages.duplicateAutomationActionIdentity, 'actions');
        }
        actionIdentities.add(action.id);
    }
    const edgeIdentities = new Set();
    const outgoing = new Map();
    const incoming = new Map();
    // Edges are stored without ids, so source/target pairs are their identity.
    // While collecting them, also track incoming/outgoing degree so we can
    // reject branches before checking the full path shape.
    for (const edge of edges) {
        if (!actionIdentities.has(edge.source_action_id) ||
            !actionIdentities.has(edge.target_action_id)) {
            throwValidationError(messages.invalidAutomationEdgeEndpoint, 'edges');
        }
        if (edge.source_action_id === edge.target_action_id) {
            throwValidationError(messages.invalidAutomationEdge, 'edges');
        }
        const edgeIdentity = `${edge.source_action_id}->${edge.target_action_id}`;
        if (edgeIdentities.has(edgeIdentity)) {
            throwValidationError(messages.duplicateAutomationEdge, 'edges');
        }
        edgeIdentities.add(edgeIdentity);
        if (outgoing.has(edge.source_action_id) || incoming.has(edge.target_action_id)) {
            throwValidationError(messages.invalidAutomationGraphShape, 'edges');
        }
        outgoing.set(edge.source_action_id, edge.target_action_id);
        incoming.set(edge.target_action_id, edge.source_action_id);
    }
    validateLinearGraph(actionIdentities, outgoing, incoming);
}
function validateLinearGraph(actionIdentities, outgoing, incoming) {
    // A single-action automation is valid only when it has no edges.
    if (actionIdentities.size === 1) {
        if (outgoing.size !== 0 || incoming.size !== 0) {
            throwValidationError(messages.invalidAutomationGraphShape, 'edges');
        }
        return;
    }
    // A linear path with N actions must have exactly N - 1 edges.
    if (outgoing.size !== actionIdentities.size - 1) {
        throwValidationError(messages.invalidAutomationGraphShape, 'edges');
    }
    const heads = [...actionIdentities].filter((identity) => !incoming.has(identity));
    const tails = [...actionIdentities].filter((identity) => !outgoing.has(identity));
    // A valid path has one start node with no incoming edge and one end node
    // with no outgoing edge.
    if (heads.length !== 1 || tails.length !== 1) {
        throwValidationError(messages.invalidAutomationGraphShape, 'edges');
    }
    const visited = new Set();
    let cursor = heads[0];
    // Walk from the head through outgoing edges. Revisiting a node means a
    // cycle; visiting fewer nodes than submitted means the graph is disconnected.
    while (cursor) {
        if (visited.has(cursor)) {
            throwValidationError(messages.invalidAutomationGraphShape, 'edges');
        }
        visited.add(cursor);
        cursor = outgoing.get(cursor);
    }
    if (visited.size !== actionIdentities.size) {
        throwValidationError(messages.invalidAutomationGraphShape, 'edges');
    }
}
function throwValidationError(message, property) {
    throw new errors_1.default.ValidationError({
        message,
        property,
    });
}
function requestPoll() {
    domainEvents.dispatch(start_automations_poll_event_1.StartAutomationsPollEvent.create());
}
async function trigger(options) {
    if (options.event !== 'member_sign_up') {
        throw new errors_1.default.IncorrectUsageError({
            message: 'Member signup is the only supported event right now. More may be added later',
        });
    }
    if (!labs.isSet('automations')) {
        return;
    }
    await repository.trigger(options);
    requestPoll();
}
async function fetchAndLockSteps(...args) {
    return await repository.fetchAndLockSteps(...args);
}
async function finishStepAndEnqueueNext(...args) {
    return await repository.finishStepAndEnqueueNext(...args);
}
async function markStepTerminal(...args) {
    return await repository.markStepTerminal(...args);
}
async function retryStep(...args) {
    return await repository.retryStep(...args);
}
async function recordEmailSent(...args) {
    return await repository.recordEmailSent(...args);
}
async function getAutomatedEmailRecipientsByMailgunIds(...args) {
    return await repository.getAutomatedEmailRecipientsByMailgunIds(...args);
}
async function trackEmailDeliveredAndOpened(...args) {
    return await repository.trackEmailDeliveredAndOpened(...args);
}
async function trackEmailClicked(...args) {
    await repository.trackEmailClicked(...args);
}
