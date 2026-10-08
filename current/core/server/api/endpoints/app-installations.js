"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_installations_1 = require("../../services/app-installations");
const noCacheInvalidation = { cacheInvalidate: false };
const controller = {
    docName: 'app_installations',
    browse: {
        headers: noCacheInvalidation,
        permissions: true,
        async query() {
            return { data: await app_installations_1.service.browse() };
        },
    },
    read: {
        headers: noCacheInvalidation,
        options: ['id'],
        validation: { options: { id: { required: true } } },
        permissions: true,
        query(frame) {
            return app_installations_1.service.read(frame.options.id);
        },
    },
    destroy: {
        statusCode: 204,
        headers: noCacheInvalidation,
        options: ['id'],
        validation: { options: { id: { required: true } } },
        permissions: true,
        query(frame) {
            return app_installations_1.service.uninstall((0, app_installations_1.actingContext)(frame.options.context), frame.options.id);
        },
    },
};
// The API framework loads this file with `require()`, so it exports CommonJS-style;
// `export default` would not be picked up.
module.exports = controller;
