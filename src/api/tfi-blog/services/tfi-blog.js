'use strict';

/**
 * tfi-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tfi-blog.tfi-blog');
