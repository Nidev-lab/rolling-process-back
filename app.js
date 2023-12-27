const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./src/config/config.json');

// Database
mongoose.connect(process.env.DB_MONGO);

// Settings
const app = express();
const port = process.env.PORT || 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());

// Routes
app.use('/', require('./src/routes/processDetail.routes'));
app.use('/', require('./src/routes/processList.routes'));
app.use('/', require('./src/routes/user.routes'));
app.use('/', require('./src/routes/login.routes'));

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/*', (req, res) => res.send({ error: { message: 'Not found', stateCode: 404 } }));

// Server
app.listen(port, () => console.log('Server running in port', port));

module.exports = app;
