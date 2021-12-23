const mongoose = require("mongoose");
let messageBlock = mongoose.Schema({
  messages: [{ type: mongoose.Types.ObjectId, ref: "message" }],
});
module.exports = mongoose.model("messageBlock", messageBlock);
