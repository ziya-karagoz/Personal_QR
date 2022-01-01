const express = require("express");
const qr = require("../model/qr");

const qrRoute = express.Router();

const Qr = require("../model/qr");

qrRoute.post("/qrgenerate", (req, res) => {});

module.exports = qrRoute;
