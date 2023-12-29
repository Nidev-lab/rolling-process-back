const router = require('express').Router();
const controller = require('../controllers/processList.controller');

const path = '/v1/processList';

router
  .get(`${path}/findAll`, controller.getProcessList)
  .post(`${path}/create`, controller.postProcessList);

module.exports = router;
