const express = require("express");

const qrRoute = express.Router();
const mongoose = require("mongoose");

const User = require("../model/user");
const QrBlock = require("../model/qrBlock");
const Qr = require("../model/qr");
const MessageBlock = require("../model/messageBlock");

qrRoute.post("/qrgenerate", (req, res) => {
  let { user, message, qrName } = req.body;
  MessageBlock.create({ messages: message }).then((mb) => {
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
      return res.status(200).json({ qrs });
    })
    .catch((e) => console.log("ERR :", e));
});

qrRoute.post("/scanQr", (req, res) => {
  let { data } = req.body;
  var id = mongoose.Types.ObjectId(data);
  let qrOwner = "";

  Qr.findById(id)
    .exec()
    .then((qrr) => {
      QrBlock.findOne({ qr: { $all: [qrr._id] } })
        .then((res) => {
          User.findOne({ qrBlock: { _id: res._id } }).then((ress) => {
            qrOwner = ress._id.toString();
          });
        })
        .then(() => {
          MessageBlock.findById(qrr.messageBlock).then((messageBlock) => {
            return res
              .status(200)
              .json({ message: messageBlock.messages, qrOwner });
          });
        });
    });
});

qrRoute.post("/qrEdit", (req, res) => {
  const { qrId, messageOne, messageTwo } = req.body;
  Qr.findById(qrId)
    .exec()
    .then((qrr) => {
      console.log("qrr: ", qrr);
      MessageBlock.findByIdAndUpdate(qrr.messageBlock, {
        $set: {
          "messages.0.messageOne": messageOne,
          "messages.0.messageTwo": messageTwo,
        },
      })
        .exec()
        .then((messageBlock) => {
          console.log("Messages: ", messageBlock);
          return res.status(200).json({ messageOne, messageTwo });
        });
    });
});

module.exports = qrRoute;
