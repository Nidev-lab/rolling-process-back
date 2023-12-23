const User = require('../models/user.schema')
const bcrypt = require('bcrypt')

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ mensaje: "Debe llenar todos los campos." });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      res
        .status(400)
        .send({ mensaje: "Error. No existe usuario registrado con este nombre de usuario", email });
      return;
    }
    const passCorrect = await bcrypt.compare(password, user.password)
    if (!passCorrect) {
      res.status(400), json({ msg: 'password incorrect' })
      return
    }
    res.status(200).send({ msg: true })

  } catch (error) {
    res.status(404).json({ mensaje: error })
  }
};

module.exports = { login }
