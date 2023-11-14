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

  // ===== find Best Seller ======
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
  },

  // ===== find Best Seller ======
  async findHotProducts(ctx) {
    try {
      const data = await strapi.db.query('api::product.product').findMany({
        where: {
          isHot: true
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
  // ===== find Best Seller ======
  async searchProducts(ctx) {
    try {
      let listProducts = []
      const query = ctx.request.query
      // @ts-ignore
      const queryCategories = query.category.split(',');
      if (queryCategories.length > 0) {
        for (let index = 0; index < queryCategories.length; index++) {
          const data = await strapi.db.query('api::product.product').findMany({
            where: {
              category: {
                name: queryCategories[index]
              }
            },
            populate: {
              variations: {
                populate: true
              },
              image: true,
              category: true
            }
          })
          if (data.length > 0) {
            data.forEach(product => listProducts.push(product))
          }
        }
      }

      if (listProducts.length > 0) {
        return ctx.body = listProducts
      }

      return ctx.body = {
        message: "There are no products",
        data: []
      }
    } catch (error) {
      return ctx.body = error
    }
  }
}));
