"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
exports.getInstance = getInstance;
exports.scheduleCheckJob = scheduleCheckJob;
const logging_1 = __importDefault(require("@tryghost/logging"));
const errors = __importStar(require("@tryghost/errors"));
const check_signing_keys_job_1 = __importDefault(require("./check-signing-keys-job"));
const signing_key_service_1 = require("./signing-key-service");
let service;
let jobs;
let scheduled = false;
// Runs after settings init so the key rows exist; advances any rotation that's due before
// anything signs or publishes a key.
async function init() {
    if (service) {
        return;
    }
    const settingsCache = require('../../../shared/settings-cache');
    const models = require('../../models');
    const instance = new signing_key_service_1.SigningKeyService({
        settingsCache,
        Settings: models.Settings,
        transaction: (fn) => models.Base.transaction(fn),
        logging: logging_1.default,
        onRotationStarted: schedule,
    });
    await instance.check();
    service = instance;
}
function getInstance() {
    if (!service) {
        throw new errors.IncorrectUsageError({
            message: 'Signing keys used before init(). Call init() from boot first.',
        });
    }
    return service;
}
async function scheduleCheckJob(jobsService) {
    jobs = jobsService;
    // Nothing to advance until a key is rotated
    if (getInstance().isRotating()) {
        await schedule();
    }
}
// Before background services start there's no jobs service yet; scheduleCheckJob covers boot
async function schedule() {
    if (scheduled || !jobs || process.env.NODE_ENV?.startsWith('test')) {
        return;
    }
    // Random minute so a fleet of sites doesn't check at once
    const cron = `${Math.floor(Math.random() * 60)} ${Math.floor(Math.random() * 60)} * * * *`;
    logging_1.default.info(`[Background Job] check-signing-keys scheduled at ${cron}`);
    await jobs.scheduleRecurring(new check_signing_keys_job_1.default(), { cron });
    scheduled = true;
}
