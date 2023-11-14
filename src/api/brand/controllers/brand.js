'use strict';

/**
 * brand controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::brand.brand', ({ strapi }) => ({
  async findAllBrands(ctx) {
    try {
      const data = await strapi.db.query('api::brand.brand').findMany({
        populate: true
      })
      return ctx.body = data
    } catch (error) {
      ctx.body = error
    }
  }
}));
