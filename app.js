/* eslint-disable no-console, import/no-extraneous-dependencies */

const cookieParser = require('cookie-parser');
const swaggerUI = require('swagger-ui-express');
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { swaggerSpec } = require('./src/config/swagger');
require('dotenv').config();

// Database
mongoose.connect(process.env.DB_MONGO);

// Settings
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());

// Routes
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use('/v1/process-detail', require('./src/routes/process.routes'));
app.use('/v1/user', require('./src/routes/user.routes'));

app.use('/*', (req, res) => res.send({ error: { message: 'Not found', stateCode: 404 } }));

// Server
app.listen(port, () => console.log('Server running in port', port));

module.exports = app;
