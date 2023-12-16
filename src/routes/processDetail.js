const express = require('express');
const { postProcessDetail } = require('../controllers/processDetail');

const router = express.Router();

router
  .get('/', postProcessDetail)
  .post('/', postProcessDetail);

module.exports = router;
