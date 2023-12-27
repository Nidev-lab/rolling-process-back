const bcrypt = require('bcrypt');
const User = require('../models/user.schema');

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: 'Debe llenar todos los campos.' });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res
        .status(400)
        .send({ error: 'Error. No existe usuario registrado con este nombre de usuario', email });
    }
    const passCorrect = await bcrypt.compare(password, user.password);
    if (!passCorrect) {
      res.status(400).json({ error: 'contraseña incorrecta' });
    }
    res.status(200).send({ response: true });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { login };
