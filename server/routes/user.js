const express = require("express");
const userRoute = express.Router();
const User = require("../model/user");

userRoute.post("/login-check", (req, res) => {
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
module.exports = userRoute;
