import getDatabase from '@/lib/getDBClient';
import { ObjectId } from 'mongodb';

class Rack {
  private id: ObjectId | undefined;
  private rackName: string = '';
  private rackItems: Array<ObjectId> = [];

  constructor(name: string, rackItems: Array<ObjectId>, id: ObjectId) {
    this.rackName = name;
    this.rackItems = rackItems;
    this.id = id ?? undefined;
  }

  get Id() {
    return this.id;
  }

  set RackName(name: string) {
    this.rackName = name;
  }
  get RackName() {
    return this.rackName;
  }

  set RackItems(productIds: Array<ObjectId>) {
    this.rackItems = productIds;
  }
  get RackItems() {
    return this.rackItems;
  }

  async pushToDatabase() {
    try {
      if (this.id) {
        throw new Error('This is document already exists on the database.');
      }

      const db = await getDatabase();
      const collection = db.collection('racks');
      return await collection.insertOne(this);
    } catch (error) {
      console.log('[-] COULD NOT PUSH NEW RACK TO THE DATABASE...');
      console.log('=====================ERROR=====================');
      console.log(error);
      console.log('===============================================');
    }
  }

  async saveChanges() {
    try {
      if (!this.id) {
        throw new Error('This is a new document. Try pushing to the database.');
      }

      const db = await getDatabase();
      const collection = db.collection('racks');
      collection.updateOne({ _id: this.id }, this);
    } catch (error) {
      console.log('[-] COULD NOT SAVE CHANGES TO THE DATABASE...');
      console.log('=====================ERROR=====================');
      console.log(error);
      console.log('===============================================');
    }
  }

  static async findById(id: ObjectId) {
    try {
      const db = await getDatabase();
      const collection = db.collection('racks');
      const doc = await collection.findOne({ _id: id });

      if (doc) {
        return new Rack(doc.rackName, doc.rackItems, doc._id);
      } else {
        return null;
      }
    } catch (error) {
      console.log('=====================ERROR=====================');
      console.log(error);
      console.log('===============================================');
    }
  }

  static async deleteById(id: ObjectId) {
    try {
      const db = await getDatabase();
      const collection = db.collection('racks');
      return await collection.deleteOne({ _id: id });
    } catch (error) {
      console.log('=====================ERROR=====================');
      console.log(error);
      console.log('===============================================');
    }
  }
}

export default Rack;
