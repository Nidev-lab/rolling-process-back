const ProcessDetail = require("../models/processDetail");

const postProcessDetail = async (req, res) => {
  try {
    const newProcess = new ProcessDetail({
      processId: req.body.processId,
      details: req.body.details,
      answers: req.body.answers,
    });

    await newProcess.save();

    res.status(201).json(newProcess);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const getAllProcessDetail = async (req, res) => {
  try {
    const processes = await ProcessDetail.find({});
    if (!processes) {
      return res.status(404).json({ message: "Process not found" });
    }
    return res.status(200).json(processes);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server error");
  }
};

const getProcessDetail = async (req, res) => {
  try {
    const process = await ProcessDetail.findOne({
      processId: req.params.id,
    });
    if (!process) {
      return res.status(404).json({ message: "Process not found" });
    }
    return res.status(200).json(process);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server error");
  }
};
module.exports = { postProcessDetail, getAllProcessDetail, getProcessDetail };
