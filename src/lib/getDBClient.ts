import { MongoClient } from 'mongodb';

export default async function getDatabase() {
  const client = await MongoClient.connect(process.env.MONGODB_URI!);
  return client.db('website');
}
