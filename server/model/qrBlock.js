const mongoose = require("mongoose");
let qrBlock = mongoose.Schema({
  qr: [{ type: mongoose.Types.ObjectId, ref: "qr" }],
});
module.exports = mongoose.model("qrBlock", qrBlock);
