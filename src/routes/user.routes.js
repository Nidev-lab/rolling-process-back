const router = require('express').Router();
const controller = require('../controllers/user.controller');

const path = '/v1/user';

router
  .get(`${path}/findAll`, controller.findUser)
  .post(`${path}/create`, controller.createUser)
  .put(`${path}/edit/:id`, controller.editUser)
  .delete(`${path}/delete/:id`, controller.deteleUser);

module.exports = router;
