'use strict';

/**
 * category router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::category.category');

module.exports = {
  routes: [
    {
      method: 'GET',
      path: "/categories",
      handler: "category.find",
      config: {
        policies: [],
        middlewares: []
      }
    },
    {
      method: 'GET',
      path: "/categories/:id",
      handler: "category.findOne",
      config: {
        policies: [],
        middlewares: []
      }
    },
    {
      method: 'GET',
      path: "/feature-categories",
      handler: "category.findFeature",
      config: {
        policies: [],
        middlewares: []
      }
    },
  ]
}
