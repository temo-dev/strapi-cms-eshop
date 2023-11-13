'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({
  async findBySlug(ctx) {
    try {
      const slug = ctx.query.slug
      const data = await strapi.entityService.findMany('api::product.product', {
        // @ts-ignore
        filters: { slug: slug },
      })
      if (data.length === 1) {
        ctx.body = data[0]
      } else {
        ctx.body = "The product has many than one"
      }

    } catch (error) {
      ctx.body = error
    }
  }
}));
