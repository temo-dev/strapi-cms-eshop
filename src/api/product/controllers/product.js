'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({
  // ===== find product by slug ======
  async findBySlug(ctx) {
    try {
      const slug = ctx.query.slug
      const data = await strapi.entityService.findMany('api::product.product', {
        // @ts-ignore
        filters: { slug: slug },
      })
      if (data.length === 1) {
        return ctx.body = data[0]
      } else {
        return ctx.body = "The product has many than one"
      }

    } catch (error) {
      return ctx.body = error
    }
  },

  // ===== find new product ======
  async findNewProducts(ctx) {
    try {
      const data = await strapi.db.query('api::product.product').findMany({
        where: {
          isNew: true
        },
        populate: {
          variations: {
            populate: true
          },
          image: true
        }
      })
      if (data.length > 0) {
        return ctx.body = data
      }
      return ctx.body = "The product is empty"
    } catch (error) {
      return ctx.body = error
    }
  },


  // ===== find new product ======
  async findBestSellerProducts(ctx) {
    try {
      const data = await strapi.db.query('api::product.product').findMany({
        where: {
          isBestSeller: true
        },
        populate: {
          variations: {
            populate: true
          },
          image: true
        }
      })
      if (data.length > 0) {
        return ctx.body = data
      }
      return ctx.body = "The product is empty"
    } catch (error) {
      return ctx.body = error
    }
  }
}));
