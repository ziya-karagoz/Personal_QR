const express = require("express");
const userRoute = express.Router();
const User = require("../model/user");

userRoute.get("/check/:email/:password", (req, res) => {
  let { email, password } = req.params;
  console.log("RES : ", email, password);
  User.find({ email, password })
    .exec()
    .then((user) => {
      if (user.length > 0) {
        res.status(200).send(user);
      } else {
        res.status(400).send({ message: "User not found" });
      }
    });
});

module.exports = userRoute;
