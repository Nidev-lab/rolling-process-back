const express = require('express');
const { postProcessDetail } = require('../controllers/processDetail');

const router = express.Router();

router
  .post('/', postProcessDetail);

module.exports = router;
