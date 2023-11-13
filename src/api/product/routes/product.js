'use strict';

/**
 * product router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::product.product');

module.exports = {
  routes: [
    {
      method: 'GET',
      path: "/products-slug",
      handler: "product.findBySlug",
      config: {
        policies: [],
        middlewares: []
      }
    },
    {
      method: 'GET',
      path: "/products",
      handler: "product.find",
      config: {
        policies: [],
        middlewares: []
      }
    },
    {
      method: 'GET',
      path: "/products",
      handler: "product.findOne",
      config: {
        policies: [],
        middlewares: []
      }
    },
    {
      method: 'PUT',
      path: "/products",
      handler: "product.update",
      config: {
        policies: [],
        middlewares: []
      }
    }
    , {
      method: 'DELETE',
      path: "/products",
      handler: "product.delete",
      config: {
        policies: [],
        middlewares: []
      }
    }
  ]
}
