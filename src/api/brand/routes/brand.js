'use strict';

/**
 * brand router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::brand.brand');

module.exports = {
  routes: [
    {
      method: 'GET',
      path: "/all-brands",
      handler: "brand.findAllBrands",
      config: {
        policies: [],
        middlewares: []
      }
    },
  ]
}
