"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = exports.actingContext = void 0;
exports.init = init;
exports.isAvailable = isAvailable;
const config_1 = __importDefault(require("../../../shared/config"));
const url_utils_1 = __importDefault(require("../../../shared/url-utils"));
const in_development_1 = require("../../data/schema/in-development");
const actions_1 = require("./actions");
const service_1 = require("./service");
var actions_2 = require("./actions");
Object.defineProperty(exports, "actingContext", { enumerable: true, get: function () { return actions_2.actingContext; } });
function init() {
    if (exports.service) {
        return;
    }
    const { knex } = require('../../data/db');
    const models = require('../../models');
    const recordAction = (input) => (0, actions_1.recordAppInstallationAction)({ Action: models.Action, ...input });
    exports.service = new service_1.AppInstallationsService({
        knex,
        recordAction,
        // Read per install, not once at boot: both are config, which tests change.
        getManifestRules: () => ({
            ghostUrls: [url_utils_1.default.urlFor('home', true), url_utils_1.default.urlFor('admin', true)],
            allowLocalhost: config_1.default.get('env') === 'development',
        }),
    });
}
/**
 * Whether this database has the installations table.
 *
 * While the table is still in development it only exists in development and testing
 * databases. Once it is finalised and has a migration it exists everywhere, and this is
 * always true.
 */
function isAvailable() {
    return !(0, in_development_1.isInDevelopmentTable)('app_installations') || (0, in_development_1.shouldCreateInDevelopmentTables)();
}
