const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://admin:adminhahagobrr@personalqrcluster.ovdsz.mongodb.net/PersonalQRDB?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, client) {
  if (err) throw err;
  var dbo = client.db("PersonalQRDB");
  var user = {
    username: "ziaboi",
    name: "Ziya",
    surname: "Karagoz",
    dateOfBirth: new Date(1999, 12, 4),
    email: "ziyakaragoz42@gmail.com",
    phoneNumber: "05314253902",
    password: "ziyagobrr",
    gender: "Male",
    qrBlock: {
      qr1: {
        qrId: "61b740082a29928aa126171d",
        messageBlock: {
          message1: "Geldin mi?",
          message2: "Sinavlar obsdedir.",
        },
      },
    },
  };
  dbo.collection("Users").insertOne(user, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    client.close();
  });
});
