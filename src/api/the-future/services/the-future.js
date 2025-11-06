'use strict';

/**
 * the-future service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::the-future.the-future');
