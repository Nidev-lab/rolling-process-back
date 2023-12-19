const UserSchema = require('../models/user.schema');

const findUser = async (req, res) => {
  try {
    const response = await UserSchema.find();
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const userModel = new UserSchema({ ...req.body });
    const response = await userModel.save();
    res.status(201).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = { createUser, findUser };
