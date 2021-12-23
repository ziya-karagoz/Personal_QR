const mongoose = require("mongoose");

let User = mongoose.Schema({
  username: { type: String, require: true },
  name: { type: String, require: true },
  surname: { type: String, require: true },
  dateOfBirth: { type: Date, require: true },
  email: { type: String, require: true },
  phoneNumber: { type: String, require: true },
  password: { type: String, require: true },
  gender: { type: String, require: true },
  qrBlock: { type: mongoose.Types.ObjectId, ref: "qrBlock" },
});

module.exports = mongoose.model("user", User);
