const express = require("express");
const app = express();
const cors = require("cors");

const userRoute = require("./routes/user");
const qrRoute = require("./routes/qr");

require("./database/index");

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoute);
app.use("api/qr", qrRoute);

app.listen(5000, () => {
  console.log("Calisiyor port : ", 5000);
});

/*
Qr.find({ _id: "61c48ee15bf0ea556783b535" })
      .populate({
        path: "messageBlock",
        populate: { path: "messages" },
      })
      .then((res) => {
        let _id = res[0].messageBlock.messages[0]._id;
        Message.updateOne(
          { _id },
          {
            messageOne: "degistimi",
          },
          { upsert: true }
        ).exec();
      });
*/
