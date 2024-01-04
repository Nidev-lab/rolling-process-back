const swaggerAutogen = require('swagger-autogen')();

const host = process.env.URL_API;

const doc = {
  info: {
    version: '1.0.0',
    title: 'Rolling-Process V1 Docs',
    description: 'This is docs for repeet test with endpoint and reference for front',
  },
  tags: [
    {
      name: 'Users',
    },
    {
      name: 'Auth',
    },
    {
      name: 'Process Details',
    },
  ],
  host,
  basePath: '/',
  schemes: ['http', 'https'],
};

const output = './config.json';
const routes = ['../../routes/*.js'];

swaggerAutogen(output, routes, doc);
