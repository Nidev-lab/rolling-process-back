const UserSchema = require('../models/user.schema');

const findUser = async (req, res) => {
  // #swagger.tags = ['Users']
  try {
    const response = await UserSchema.find();
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const createUser = async (req, res) => {
  // #swagger.tags = ['Users']
  try {
    const userModel = new UserSchema({ ...req.body });
    const response = await userModel.save();
    res.status(201).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const editUser = async (req, res) => {
  // #swagger.tags = ['Users']
  try {
    const response = await UserSchema.findByIdAndUpdate({
      _id: req.params.id,
    }, req.body, { new: true });
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message, id: req.params.id });
  }
};

const deteleUser = async (req, res) => {
  // #swagger.tags = ['Users']
  try {
    const response = await UserSchema.findByIdAndDelete(req.params.id);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message, id: req.params.id });
  }
};

module.exports = {
  createUser, findUser, editUser, deteleUser,
};
