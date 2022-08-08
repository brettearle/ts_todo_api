import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.DB_STR ? process.env.DB_STR : "";

let mongodb: any;
function connectDB(): void {
  console.log(uri);
  MongoClient.connect(uri, (err, client) => {
    if (err) throw err;
    mongodb = client?.db("todos");
    console.log("connected to db");
  });
}

function getDB() {
  return mongodb;
}

function MongoObjectID(id: string) {
  return new ObjectId(id);
}

export { connectDB, getDB, MongoObjectID };
