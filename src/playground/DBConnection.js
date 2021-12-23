const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://admin:adminhahagobrr@personalqrcluster.ovdsz.mongodb.net/PersonalQRDB?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, client) {
  if (err) throw err;
  var dbo = client.db("PersonalQRDB");
  var user = {
    username: "utabatu",
    name: "Batuhan",
    surname: "Acar",
    dateOfBirth: new Date(1998, 3, 19),
    email: "batuhan1.acar@gmail.com",
    phoneNumber: "05071735159",
    password: "batubsibuyuk",
    gender: "Male",
    qrBlock: {
      qr1: {
        qrId: "61bdsgfs0082a29928aqertawa12dsfg71d",
        messageBlock: {
          message1: "Sin mi?",
          message2: "Sindir.",
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
