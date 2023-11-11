'use strict';

const { entityService } = require("@strapi/strapi").factories
/**
 * A set of functions called "actions" for `demo`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    console.log('ctx =====>', ctx)
    try {
      const data = await strapi.entityService.findMany("api::account.account")
      console.log('data ===>', data)
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};
