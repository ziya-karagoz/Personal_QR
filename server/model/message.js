const mongoose = require("mongoose");
let message = mongoose.Schema({
  messageOne: String,
  messageTwo: String,
});
module.exports = mongoose.model("message", message);
