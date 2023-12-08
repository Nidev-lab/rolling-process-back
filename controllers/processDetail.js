const ProcessDetail = require('../models/processDetail');

const postProcessDetail = async (req, res) => {
  try {
    const newProcess = new ProcessDetail({
      processId: req.body.processId,
      details: req.body.details,
    });

    await newProcess.save();

    res.status(201).json(newProcess);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { postProcessDetail };
