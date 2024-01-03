/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const UserSchema = require('../models/user.schema');

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
    const transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: process.env.NODEMAILER_PORT,
      secure: true,
      auth: { user: process.env.NODEMAILER_EMAIL, pass: process.env.NODEMAILER_PASS },
    });
    await transporter.sendMail({
      to: email,
      from: 'Rolling Process',
      subject: 'Recuperar contraseña',
      text: `Ingrese aqui para recuperar contraseña http://localhost:3000/recoverPassword/${btoa({ email })}`,
    });
    res.status(200).send({ response: `email enviado a ${email}, revise su cuenta!` });
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
