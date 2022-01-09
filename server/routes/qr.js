const express = require("express");

const qrRoute = express.Router();
const mongoose = require("mongoose");

const User = require("../model/user");
const QrBlock = require("../model/qrBlock");
const Qr = require("../model/qr");
const MessageBlock = require("../model/messageBlock");
const messageBlock = require("../model/messageBlock");

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
    .populate({ path: "qr", populate: { path: "messageBlock" } })
    .then((qrblk) => {
      qrs = qrblk.qr;
      console.log("qrs: ", qrs);
      return res.status(200).json({ qrs });
    })
    .catch((e) => console.log("ERR :", e));
});

qrRoute.post("/scanQr", (req, res) => {
  let { data } = req.body;

  Qr.findById(data)
    .exec()
    .then((qrr) => {
      MessageBlock.findById(qrr.messageBlock).then((messageBlock) => {
        console.log("Messages: ", messageBlock.messages);
        return res.status(200).json({ message: messageBlock.messages });
      });
    });
});

module.exports = qrRoute;
