const express = require('express');
const controller = require('../controllers/processDetail.controller');

const path = '/v1/process-detail';
const router = express.Router();

router.post(`${path}/create`, controller.postProcessDetail);
router.get(`${path}/findAll`, controller.getAllProcessDetail);
router.get(`${path}/:id`, controller.getProcessDetail);

module.exports = router;
