//  /api/new-meetup
//  POST /api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://fenix:MR5nBGrPWUY0PiPi@reactvsnext.j9lwg.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);
    console.log(result);
    client.close();
  }
}

export default handler;
