/* eslint-disable no-console, import/no-extraneous-dependencies */

const cookieParser = require('cookie-parser');
const swaggerUI = require('swagger-ui-express');
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const processRouter = require('./src/routes/process.routes');
const { router: userRouter, swaggerDocs } = require('./src/routes/user.routes');

const { swaggerSpec } = require('./src/swagger');
require('dotenv').config();

// Database
mongoose.connect(process.env.DB_MONGO);

// Settings
const app = express();
const port = process.env.PORT || 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());

// Routes
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec, swaggerDocs.router));

app.use('/v1/process-detail', processRouter);
app.use('/v1/user', userRouter);

app.use('/*', (req, res) => res.send({ error: { message: 'Not found', stateCode: 404 } }));

// TODO i18n: refactor code in case stateCode 404 and response in this case

// Server
app.listen(port, () => console.log('Server running in port', port));

module.exports = app;
