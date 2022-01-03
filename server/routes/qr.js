const express = require("express");

const qrRoute = express.Router();

qrRoute.post("/qrgenerate", (req, res) => {
  console.log("REQ: ", req.body);
  if (req.body) {
    res.status(200).send({ message: "basarili" });
  } else {
    res.status(400).send({ error: "QR not found" });
  }
});

module.exports = qrRoute;
