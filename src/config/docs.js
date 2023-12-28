const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    version: '1.0.0',
    title: 'Rolling-Process V1 Docs',
    description: 'This is docs for repeet test with endpoint and reference for front',
  },
  host: 'rolling-process-back-production-977c.up.railway.app',
  tags: [
    {
      name: 'Auth',
    },
    {
      name: 'Users',
    },
    {
      name: 'Process Details',
    },
  ],
};

const output = './config.json';
const routes = ['../routes/*.js'];

swaggerAutogen(output, routes, doc);
