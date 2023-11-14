'use strict';

/**
 * category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category', ({ strapi }) => ({
  async findFeature(ctx) {
    try {
      const data = await strapi.db.query('api::category.category').findMany({
        populate: {
          products: {
            populate: true
          }
        },
        limit: 3,
      })
      return ctx.body = data
    } catch (error) {
      ctx.body = error
    }
  }
}));
