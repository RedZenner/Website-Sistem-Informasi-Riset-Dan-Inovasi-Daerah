"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAppInstallationManifest = exports.StoredManifest = exports.DbAppInstallation = exports.AppInstallationStatus = void 0;
const zod_1 = require("zod");
const manifest_1 = require("@tryghost/app-contracts/manifest");
const boolean_1 = require("../../lib/db-types/boolean");
const date_1 = require("../../lib/db-types/date");
// Mirrors schema.js's `isIn` on the column, which is static config and cannot import this.
exports.AppInstallationStatus = zod_1.z.enum(['active', 'suspended', 'uninstalled']);
/** An installation as the table holds it. */
exports.DbAppInstallation = zod_1.z.object({
    id: zod_1.z.string(),
    app_id: zod_1.z.string(),
    current_app_id: zod_1.z.string().nullable(),
    status: exports.AppInstallationStatus,
    manifest_id: zod_1.z.string(),
    pending_manifest_id: zod_1.z.string().nullable(),
    revision: zod_1.z.number().int().nonnegative(),
    created_at: date_1.DbDate,
    updated_at: date_1.DbDate.nullable(),
});
/**
 * The manifest as the table holds it, JSON text, against the manifest itself. A codec
 * rather than a parse on the way out, so the write stores what the read accepts: the
 * digest is taken from this encoding, and the read decodes exactly it.
 */
exports.StoredManifest = zod_1.z.codec(zod_1.z.string(), manifest_1.AppManifestSchema, {
    decode: (text, ctx) => {
        try {
            return JSON.parse(text);
        }
        catch {
            ctx.issues.push({
                code: 'custom',
                message: 'The stored manifest is not JSON.',
                input: text,
            });
            return zod_1.z.NEVER;
        }
    },
    encode: (manifest) => JSON.stringify(manifest),
});
/** A manifest an installation has run or been asked to approve, as the table holds it. */
exports.DbAppInstallationManifest = zod_1.z.object({
    id: zod_1.z.string(),
    installation_id: zod_1.z.string(),
    manifest_url: zod_1.z.string(),
    manifest: exports.StoredManifest,
    digest: zod_1.z.string(),
    requires_approval: boolean_1.DbBoolean,
    created_at: date_1.DbDate,
});
