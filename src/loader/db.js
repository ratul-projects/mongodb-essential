import { MongoClient } from "mongodb";
export default async () => {
  try {
    const url = "mongodb://127.0.0.1:27017/";
    const client = new MongoClient(url);
    const dbName = "blog";
    await client.connect();
    const connection = client.db(dbName);
    global.connection = connection;
  } catch (error) {
    console.error(error);
  }
};
