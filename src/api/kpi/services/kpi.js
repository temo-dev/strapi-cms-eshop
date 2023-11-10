'use strict';

/**
 * kpi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kpi.kpi');
