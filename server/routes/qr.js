const express = require("express");

const qrRoute = express.Router();

const User = require("../model/user");
const QrBlock = require("../model/qrBlock");
const Qr = require("../model/qr");
const MessageBlock = require("../model/messageBlock");
const user = require("../model/user");

qrRoute.post("/qrgenerate", (req, res) => {
  let { user, message, qrName } = req.body;
  MessageBlock.create({ messages: [message] }).then((mb) => {
    Qr.create({ qrName, messageBlock: mb._id }).then((qr) => {
      User.findOne(user).then((usr) => {
        QrBlock.updateOne(
          { _id: usr.qrBlock },

          { $push: { qr: qr._id } }
        )
          .exec()
          .then(() => {
            return res
              .status(200)
              .json({ message: "QR generated successfuly!" });
          })
          .catch((e) => console.log("ERR :", e));
      });
    });
  });
});

qrRoute.post("/displayQrs", (req, res) => {
  let { user } = req.body;
  let qrs = [];
  QrBlock.findOne({ _id: user.qrBlock })
    .populate("qr")
    .then((qrblk) => {
      qrs = qrblk.qr;
      console.log("qrs: ", qrs);
      return res.status(200).json({ qrs });
    })
    .catch((e) => console.log("ERR :", e));
});

module.exports = qrRoute;
