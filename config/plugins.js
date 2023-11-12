module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-supabase',
      providerOptions: {
        apiUrl: env('SUPABASE_API_URL'),
        apiKey: env('SUPABASE_API_KEY'),
        bucket: env('SUPABASE_BUCKET'),
        directory: env('SUPABASE_DIRECTORY'),
        options: {}
      },
      // breakpoints: {
      //   xlarge: 1920,
      //   large: 1000,
      //   medium: 750,
      //   small: 500,
      //   xsmall: 64,
      // },
    },
  },
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 4, // Default is 5
    }
  },
})
