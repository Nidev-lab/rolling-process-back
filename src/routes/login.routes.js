const router = require('express').Router();
const controller = require('../controllers/login.controller');

const path = '/v1/login';

router
  .post(`${path}`, controller.login);

module.exports = router;
