import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://admin:adminhahagobrr@personalqrcluster.ovdsz.mongodb.net/PersonalQRDB?retryWrites=true&w=majority";
const client = new MongoClient(uri);

export async function FetchLoginData(_email, _password) {
  try {
    await client.connect();
    const database = client.db("PersonalQRDB");
    const movies = database.collection("Users");
    // Query for a movie that has the title 'The Room'
    const query = {
      email: _email,
      password: _password,
    };
    const user = await movies.findOne(query, options);
    // since this method returns the matched document, not a cursor, print it directly
    console.log(email);
  } finally {
    await client.close();
  }
}
