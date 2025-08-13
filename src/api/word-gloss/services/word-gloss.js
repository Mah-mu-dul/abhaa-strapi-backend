'use strict';

/**
 * word-gloss service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::word-gloss.word-gloss');
