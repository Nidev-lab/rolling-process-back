const express = require('express');
const controller = require('../controllers/user.controller');

const path = '/v1/user';
const router = express.Router();

router
  .get(`${path}/findAll`, controller.findUser)
  .post(`${path}/create`, controller.createUser)
  .put(`${path}/edit/:id`, controller.editUser)
  .delete(`${path}/delete/:id`, controller.deteleUser);

module.exports = router;
