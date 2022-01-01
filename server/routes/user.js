const express = require("express");
const userRoute = express.Router();
const User = require("../model/user");

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
  User.create(user).then((user) => {
    res.status(200).send({ user, message: "User created succesfuly!" });
  });
});

module.exports = userRoute;
