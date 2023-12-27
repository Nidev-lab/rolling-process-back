const ProcessList = require('../models/processList.schema');

const postProcessList = async (req, res) => {
  // #swagger.tags = ['Process Details']
  try {
    const newProcess = new ProcessList({
      processId: req.body.processId,
      title: req.body.title,
      description: req.body.description,
      assets: req.body.assets,
      area: req.body.area,
    });

    await newProcess.save();
    res.status(201).json(newProcess);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProcessList = async (req, res) => {
  // #swagger.tags = ['Process Details']
  try {
    const processes = await ProcessList.find({});
    res.status(200).json(processes);
  } catch (error) {
    res.status(500).json('Server error');
  }
};

module.exports = { postProcessList, getProcessList };
