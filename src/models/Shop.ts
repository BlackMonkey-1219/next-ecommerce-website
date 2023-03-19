import getDatabase from '@/lib/getDBClient';
import { ObjectId } from 'mongodb';

class Shop {
  private id: ObjectId | undefined;
  private shopName: string = '';
  private shopDescription = '';
  private shopRating: number = 5.0;
  private shopRacks: Array<ObjectId> = [];
  private shopProducts: Array<ObjectId> = [];

  constructor(
    name: string,
    description: string,
    rating: number = 5.0,
    racks?: Array<ObjectId>,
    products?: Array<ObjectId>,
    id?: ObjectId
  ) {
    this.shopName = name;
    this.shopDescription = description;
    this.shopRating = rating;
    this.shopRacks = racks ?? [];
    this.shopProducts = products ?? [];
    this.id = id ?? undefined;
  }

  get Id() {
    return this.id;
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

  set ShopRacks(rackIds: Array<ObjectId>) {
    this.shopRacks = rackIds;
  }
  get ShopRacks() {
    return this.shopRacks;
  }

  set ShopProducts(productIds: Array<ObjectId>) {
    this.shopProducts = productIds;
  }
  get ShopProducts() {
    return this.shopProducts;
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
      collection.updateOne({ _id: this.id }, this);
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
          doc.shopName,
          doc.shopDescription,
          doc.shopRating,
          doc.shopRacks,
          doc.shopProducts,
          doc._id
        );
      }
    } catch (error) {
      console.log('==============ERROR==============');
      console.log(error);
      console.log('=================================');
    }
  }

  static async deleteById(id: ObjectId) {
    try {
      const db = await getDatabase();
      const collection = db.collection('shops');
      return await collection.deleteOne({ _id: id });
    } catch (error) {
      console.log('==============ERROR==============');
      console.log(error);
      console.log('=================================');
    }
  }
}

export default Shop;
