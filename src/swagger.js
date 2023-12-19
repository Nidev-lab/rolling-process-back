const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const options = {
  definitions: {
    openapi: '3.0.0',
    info: { title: 'Rolling Process', version: '1.0.0' },
  },
  apis: ['src/routes/processDetails.js'],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  app.get('/api/v1/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  console.log('Version 1 Documentation Swagger App', port);
};

module.exports = { swaggerDocs };
