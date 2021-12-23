const mongoose = require("mongoose");
let qr = mongoose.Schema({
  qrName: { type: String, require: true },
  messageBlock: { type: mongoose.Types.ObjectId, ref: "messageBlock" },
});
module.exports = mongoose.model("qr", qr);
