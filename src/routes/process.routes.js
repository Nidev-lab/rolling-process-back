const express = require('express');
const controller = require('../controllers/process.controller');

const path = 'v1/process-detail';
const router = express.Router();

// #swagger.tags = ['Process']
router
  .get(`${path}/findAll`, controller.findProcessDetail)
  .post(`${path}/create`, controller.postProcessDetail);

module.exports = router;
