const mongoose = require("mongoose");
require("dotenv").config();

const mongoDBUri = process.env.PORTDB;
mongoose
  .connect(mongoDBUri)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Error MongoDB:", err));

module.exports = mongoose;
