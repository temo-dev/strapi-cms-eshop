module.exports = ({ env }) => ([
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'default-src': ["'self'", "https:"],
          'img-src': ["'self'", 'data:', 'blob:', "market-assets.strapi.io", env("SUPABASE_URL")],
          'media-src': ["'self'", 'data:', 'blob:', "market-assets.strapi.io", env("SUPABASE_URL")],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
])



