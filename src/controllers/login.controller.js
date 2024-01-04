/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcrypt');
const UserSchema = require('../models/user.schema');
const { sendEmails } = require('../config/nodemailer/sendEmails');

const login = async (req, res) => {
  // #swagger.tags = ['Auth']
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error('Debe llenar todos los campos.');
  }
  try {
    const user = await UserSchema.findOne({ email });
    if (!user) {
      throw new Error(`Error. No existe usuario registrado con este nombre de usuario ${email}`);
    }
    const passCorrect = await bcrypt.compare(password, user.password);
    if (!passCorrect) {
      throw new Error('contraseña incorrecta');
    }
    res.status(200).send({ response: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const sendEmailRecoverPassword = async (req, res) => {
  // #swagger.tags = ['Auth']
  const { email } = req.body;
  try {
    const user = await UserSchema.findOne({ email });
    if (!user) {
      throw new Error(`Error. No existe usuario registrado con este nombre de usuario ${email}`);
    }
    const response = await sendEmails({
      email,
      title: 'Recuperar la contraseña!',
    });
    res.status(200).send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const recoverPassword = async (req, res) => {
  // #swagger.tags = ['Auth']
  const { email, password } = req.body;
  try {
    const user = await UserSchema.findOne({ email });
    if (!user) {
      throw new Error(`Error. No existe usuario registrado con este nombre de usuario ${email}`);
    }
    const salt = await bcrypt.genSalt(10);
    const encrypt = await bcrypt.hash(password, salt);
    const response = await UserSchema.findByIdAndUpdate(
      { _id: user._id },
      {
        email,
        password: encrypt,
      },
      { new: true },
    );
    res.status(200).send({ response: `se actualizo su contraseña al email de ${response.email}!` });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { login, sendEmailRecoverPassword, recoverPassword };
