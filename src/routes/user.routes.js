const express = require('express');
const { createUser, findUser } = require('../controllers/user.controller');

const router = express.Router();

router
  .get('/', findUser)
  .post('/', createUser);

module.exports = router;
