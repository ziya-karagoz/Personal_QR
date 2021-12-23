const mongoose = require("mongoose");
let uri =
  "mongodb+srv://admin:adminhahagobrr@personalqrcluster.ovdsz.mongodb.net/PersonalQRDB?retryWrites=true&w=majority";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log("BAGLANDI");
  })
  .catch((err) => console.log("ERR : ", err));
