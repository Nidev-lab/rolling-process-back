const ProcessDetail = require('../models/processDetail.schema');

const postProcessDetail = async (req, res) => {
  // #swagger.tags = ['Process Details']
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
  // #swagger.tags = ['Process Details']
  try {
    const processes = await ProcessDetail.find({});
    if (!processes) {
      res.status(400).json({ message: 'Process not found' });
    }
    res.status(200).json(processes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProcessDetail = async (req, res) => {
  // #swagger.tags = ['Process Details']
  try {
    const process = await ProcessDetail.findOne({
      processId: req.params.id,
    });
    if (!process) {
      res.status(400).json({ message: 'Process not found' });
    }
    res.status(200).json(process);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postProcessDetail, getAllProcessDetail, getProcessDetail };
