const router = require('express').Router();
const controller = require('../controllers/login.controller');

const path = '/v1';

router
  .post(`${path}/login`, controller.login)
  .post(`${path}/email/recoverPassword`, controller.sendEmailRecoverPassword)
  .put(`${path}/recoverPassword`, controller.recoverPassword);

module.exports = router;
