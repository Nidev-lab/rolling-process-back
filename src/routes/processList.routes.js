const express = require('express');
const controller = require('../controllers/processList.controller');

const path = '/v1/process-list';
const router = express.Router();

router
  .get(`${path}/findAll`, controller.getProcessList)
  .post(`${path}/create`, controller.postProcessList);

module.exports = router;
