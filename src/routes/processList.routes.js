const express = require("express");
const {
  postProcessList,
  getProcessList,
} = require("../../controllers/processList.controller");

const router = express.Router();

router.post("/", postProcessList);
router.get("/", getProcessList);

module.exports = router;
