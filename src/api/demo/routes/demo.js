module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/demo',
      handler: 'demo.exampleAction',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
