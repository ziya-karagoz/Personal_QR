const express = require("express");

const qrRoute = express.Router();

const User = require("../model/user");
const QrBlock = require("../model/qrBlock");
const Qr = require("../model/qr");
const MessageBlock = require("../model/messageBlock");

qrRoute.post("/qrgenerate", (req, res) => {
  let { user, message, qrName } = req.body;
  MessageBlock.create({ messages: [message] }).then((mb) => {
    Qr.create({ qrName, messageBlock: mb._id }).then((qr) => {
      console.log("RES :", qr);

      User.findOne(user).then((usr) => {
        console.log("USER: ", usr);
        QrBlock.updateOne(
          { _id: usr.qrBlock },

          { $push: { qr: qr._id } }
        )
          .exec()
          .then((i) => console.log("I : ", i))
          .catch((e) => console.log("E ", e));
      });
    });
  });
});

module.exports = qrRoute;
