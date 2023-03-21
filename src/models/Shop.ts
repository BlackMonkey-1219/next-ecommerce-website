import getDatabase from '@/lib/getDBClient';
import { ObjectId } from 'mongodb';
import Rack from './Rack';

class Shop {
  public _id: ObjectId | undefined;
  private ownerId: ObjectId;
  private shopName: string = '';
  private shopDescription = '';
  private shopContactNumber: string;
  private shopEmail: string;
  private shopRating: number = 5;
  private shopRacks: Array<Rack> = [];

  constructor(
    ownerId: ObjectId,
    name: string,
    description: string,
    contactNumber: string,
    email: string,
    rating: number = 5,
    racks: Array<Rack> = [],
    id: ObjectId | undefined = undefined
  ) {
    this.ownerId = ownerId;
    this.shopName = name;
    this.shopDescription = description;
    this.shopContactNumber = contactNumber;
    this.shopEmail = email;
    this.shopRating = rating;
    this.shopRacks = racks;
    this._id = id;
  }

  get Id() {
    return this._id;
  }

  get OwnerId() {
    return this.ownerId;
  }

  set ShopName(name: string) {
    this.shopName = name;
  }
  get ShopName() {
    return this.shopName;
  }

  set ShopDescription(text: string) {
    this.shopDescription = text;
  }
  get ShopDescription() {
    return this.shopDescription;
  }

  set ShopContactNumber(number: string) {
    this.shopContactNumber = number;
  }
  get ShopContactNumber() {
    return this.shopContactNumber;
  }

  set ShopEmail(email: string) {
    this.shopEmail = email;
  }
  get ShopEmail() {
    return this.shopEmail;
  }

  set ShopRacks(rackIds: Array<Rack>) {
    this.shopRacks = rackIds;
  }
  get ShopRacks() {
    return this.shopRacks;
  }

  set ShopRating(rating: number) {
    if (rating >= 5.0) {
      this.shopRating = 5.0;
    } else {
      this.shopRating = rating;
    }
  }
  get ShopRating() {
    return this.shopRating;
  }

  async pushToDataBase() {
    try {
      const db = await getDatabase();
      const collection = db.collection('shops');
      return await collection.insertOne(this);
    } catch (error) {
      console.log('[-] COULD NOT PUSH NEW SHOP TO THE DATABASE...');
      console.log('=============ERROR================');
      console.log(error);
      console.log('==================================');
    }
  }

  async saveChanges() {
    try {
      const db = await getDatabase();
      const collection = db.collection('shops');
      return await collection.updateOne(
        { _id: this._id },
        { $set: { ...this } }
      );
    } catch (error) {
      console.log('[-] COULD NOT SAVE CHANGES TO THE DATABASE...');
      console.log('==============ERROR==============');
      console.log(error);
      console.log('=================================');
    }
  }

  static async findById(id: ObjectId) {
    try {
      const db = await getDatabase();
      const collection = db.collection('shops');
      const doc = await collection.findOne({ _id: id });
      if (doc) {
        return new Shop(
          doc.ownerId,
          doc.shopName,
          doc.shopDescription,
          doc.shopContactNumber,
          doc.shopEmail,
          doc.shopRating,
          doc.shopRacks,
          doc._id
        );
      }
    } catch (error) {
      console.log('[-] COULD NOT SEARCH FOR SHOPS...');
      console.log('==============ERROR==============\n');
      console.log(error, '\n');
      console.log('=================================\n');
    }
  }

  static async findBySellerId(id: ObjectId) {
    try {
      const db = await getDatabase();
      const collection = db.collection('shops');
      const resultDoc = await collection.findOne({ ownerId: id });

      if (resultDoc) {
        return new Shop(
          resultDoc.ownerId,
          resultDoc.shopName,
          resultDoc.shopDescription,
          resultDoc.shopContactNumber,
          resultDoc.shopEmail,
          resultDoc.shopRating,
          resultDoc.shopRacks,
          resultDoc._id
        );
      } else {
        return null;
      }
    } catch (error) {
      console.log('[-] COULD NOT SEARCH FOR SHOPS...');
      console.log('==============ERROR==============\n');
      console.log(error, '\n');
      console.log('=================================\n');
    }
  }

  static async deleteById(id: ObjectId) {
    try {
      const db = await getDatabase();
      const collection = db.collection('shops');
      return await collection.deleteOne({ _id: id });
    } catch (error) {
      console.log('==============ERROR==============\n');
      console.log(error, '\n');
      console.log('=================================\n');
    }
  }
}

export default Shop;
