import { MongoClient } from "mongodb";

const uri =
  process.env.DB_STR !== undefined ? process.env.DB_STR : "no db str defined";

let mongodb;
function connectDB(): void {
  MongoClient.connect(uri, (err, client) => {
    if (err) throw err;
    mongodb = client?.db("todos");
    console.log("connected to db");
  });
}

export { connectDB };
