const bcrypt = require('bcrypt');
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
  const {
    rol,
    email,
    password,
    lastName,
    firstName,
  } = req.body;
  try {
    const validate = await UserSchema.findOne({ email });
    if (validate) {
      res.status(400).send('Email en uso');
    }
    const salt = await bcrypt.genSalt(10);
    const Encrypt = await bcrypt.hash(password, salt);
    const user = new UserSchema({
      firstName,
      lastName,
      rol,
      email,
      password: Encrypt,
      createAt: Date.now(),
    });
    await user.save();
    res.status(201).send(user);
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
  deteleUser,
  createUser,
  findUser,
  editUser,
};
