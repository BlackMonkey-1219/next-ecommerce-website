import getDatabase from '@/lib/getDBClient';
import { ObjectId } from 'mongodb';

class Category {
  public _id: ObjectId | undefined;
  private categoryName: string;

  constructor(name: string, id: ObjectId | undefined = undefined) {
    this.categoryName = name;
    this._id = id;
  }

  get Id() {
    return this._id;
  }

  set CategoryName(name: string) {
    this.categoryName = name;
  }
  get CategoryName() {
    return this.categoryName;
  }

  async pushToDatabase() {
    try {
      if (this._id) {
        throw new Error('This is document already exists on the database.');
      }

      const db = await getDatabase();
      const collection = db.collection('categories');
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
      if (!this._id) {
        throw new Error('This is a new document. Try pushing to the database.');
      }

      const db = await getDatabase();
      const collection = db.collection('categories');
      collection.updateOne({ id: this._id }, this);
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
      const collection = db.collection('categories');
      const doc = await collection.findOne({ id: id });

      if (doc) {
        return new Category(doc.categoryName, doc._id);
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
      const collection = db.collection('categories');
      return await collection.deleteOne({ id: id });
    } catch (error) {
      console.log('=====================ERROR=====================');
      console.log(error);
      console.log('===============================================');
    }
  }
}

export default Category;
