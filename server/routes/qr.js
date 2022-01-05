const express = require("express");

const qrRoute = express.Router();

const User = require("../model/user");
const QrBlock = require("../model/qrBlock");
const Qr = require("../model/qr");
const messageBlock = require("../model/messageBlock");
const Message = require("../model/message");

qrRoute.post("/qrgenerate", (req, res) => {
  let { user } = req.body;
  let { qr } = req.body;
  let { qrName, message } = qr;

  // Message.create(message).then((mess) => {
  //   messageBlock.create([...mess]);
  // });

  // QrBlock olusturulduktan sonra User Collectiona eklenmesi
  // User.findOne({ email: user.email, password: user.password })
  //   .exec()
  //   .then((user) => {});

  res.status(200).send({ message: "Basarili", deneme: message.messageOne });
});

module.exports = qrRoute;
