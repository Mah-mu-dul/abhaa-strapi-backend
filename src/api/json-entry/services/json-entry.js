'use strict';

/**
 * json-entry service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::json-entry.json-entry');
