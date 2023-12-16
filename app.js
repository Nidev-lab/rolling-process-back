/* eslint-disable no-console, import/no-extraneous-dependencies */
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

// Database
mongoose.connect(process.env.DB_MONGO);

// Settings
const app = express();
const port = process.env.PORT || 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(morgan('dev'));
app.use(cookieParser());

// Routes
app.use('/v1/process-detail', require('./src/routes/processDetail'));

app.use((req, res, next) => next(createError(404)));
app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

// Server
app.listen(port, () => console.log('Server running in port', port));

module.exports = app;
