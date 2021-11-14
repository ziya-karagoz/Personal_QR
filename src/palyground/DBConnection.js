const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://admin:admin123@personalqrdb.ovdsz.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  try {
    await client.connect();

    await FetchData(client, 5);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

async function FetchData(client, resultsLimit) {
  const cursor = client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .find()
    .limit(resultsLimit);

  const results = await cursor.toArray();
  if (results.length > 0) {
    console.log(`Found ${results.length} listing(s):`);
    results.forEach((result, i) => {
      date = new Date(result.last_review).toDateString();

      console.log();
      console.log(`${i + 1}. name: ${result.name}`);
      console.log(`   _id: ${result._id}`);
      console.log(`   bedrooms: ${result.bedrooms}`);
      console.log(`   bathrooms: ${result.bathrooms}`);
      console.log(
        `   most recent review date: ${new Date(
          result.last_review
        ).toDateString()}`
      );
    });
  }
}

main().catch(console.error);
