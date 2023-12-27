const bcrypt = require('bcrypt');
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
  const { username, password } = req.body;
  try {
    const validate = await UserSchema.findOne({ username });
    if (validate) {
      res.status(400).send('Email en uso');
    }
    const salt = await bcrypt.genSalt(10);
    const Encrypt = await bcrypt.hash(password, salt);
    const user = new UserSchema({ ...req.body, password: Encrypt, createAt: Date.now() });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const editUser = async (req, res) => {
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
