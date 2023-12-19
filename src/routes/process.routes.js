const express = require('express');
const { postProcessDetail } = require('../controllers/process.controller');

const router = express.Router();

router
  .get('/', postProcessDetail)
  .post('/', postProcessDetail);

module.exports = router;
