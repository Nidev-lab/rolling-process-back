const ProcessDetail = require('../models/processs.schema');

const findProcessDetail = async (req, res) => {
  try {
    const response = await ProcessDetail.find();
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const postProcessDetail = async (req, res) => {
  try {
    const newProcess = new ProcessDetail({
      processId: req.body.processId,
      details: req.body.details,
    });
    await newProcess.save();
    res.status(201).send(newProcess);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = { postProcessDetail, findProcessDetail };
