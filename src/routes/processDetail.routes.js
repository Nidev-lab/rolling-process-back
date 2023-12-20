const express = require("express");
const {
  postProcessDetail,
  getAllProcessDetail,
  getProcessDetail,
} = require("../../controllers/processDetail.controller");

const router = express.Router();

router.post("/", postProcessDetail);
router.get("/", getAllProcessDetail);
router.get("/:id", getProcessDetail);

module.exports = router;
