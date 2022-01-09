const express = require("express");
const app = express();
const cors = require("cors");

const userRoute = require("./routes/user");
const qrRoute = require("./routes/qr");

require("./database/index");

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/qr", qrRoute);

app.listen(5000, () => {
  console.log("Calisiyor port : ", 5000);
});
