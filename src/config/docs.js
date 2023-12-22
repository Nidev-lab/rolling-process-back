const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    version: '1.0.0',
    title: 'Rolling-Process V1 Docs',
    description: 'This is docs for repeet test with endpoint and reference for front',
  },
  host: 'http://localhost:8080',
  tags: [
    {
      name: 'Users',
    },
    {
      name: 'Process',
    },
  ],
};

const output = './config.json';
const routes = ['../routes/*.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(output, routes, doc);
