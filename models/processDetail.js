const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["title", "subtitle", "message", "link"],
  },
  value: {
    type: String,
    required: true,
  },
});
const answersSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["answer"],
  },
  value: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
  },
});

const processDetailSchema = new mongoose.Schema({
  processId: {
    type: String,
    required: true,
    unique: true,
  },
  answers: [answersSchema],
  details: [detailSchema],
});

const ProcessDetail = mongoose.model("ProcessDetail", processDetailSchema);

module.exports = ProcessDetail;
