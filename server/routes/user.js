const express = require("express");

const userRoute = express.Router();

const User = require("../model/user");
const QrBlock = require("../model/qrBlock");
const qr = require("../model/qr");

userRoute.post("/login", (req, res) => {
  let { email, password } = req.body;
  User.find({ email, password })
    .exec()
    .then((user) => {
      if (user.length > 0) {
        res.status(200).send(user[0]);
      } else {
        res.status(400).send({ message: "User not found" });
      }
    });
});

userRoute.post("/register", (req, res) => {
  let user = req.body;
  QrBlock.create({ qr: [] }).then((qrblck) => {
    User.create({ ...user, qrBlock: qrblck._id }).then((user) => {
      console.log("obje: ", user);
      return res.status(200).json({ message: "User created", user });
    });
  });
});

module.exports = userRoute;
