const express = require("express");
const {
  postProcessList,
  getProcessList,
} = require("../controllers/processList");

const router = express.Router();

router.post("/", postProcessList);
router.get("/", getProcessList);

module.exports = router;
