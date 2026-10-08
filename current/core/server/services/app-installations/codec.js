"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppInstallationRow = void 0;
const zod_1 = require("zod");
const schema_1 = require("./schema");
/**
 * An installation joined with the approved manifest it runs, as the read query returns it
 * and as the Admin API returns it. The columns keep their names; decoding is what turns
 * the dates, the status and the manifest text into what the rest of Ghost works with.
 */
exports.AppInstallationRow = zod_1.z.object({
    ...schema_1.DbAppInstallation.pick({
        id: true,
        app_id: true,
        status: true,
        created_at: true,
        updated_at: true,
    }).shape,
    ...schema_1.DbAppInstallationManifest.pick({ manifest_url: true, manifest: true }).shape,
});
