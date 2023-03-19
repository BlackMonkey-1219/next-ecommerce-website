import { ObjectId } from 'mongodb';
import getDatabase from '@/lib/getDBClient';

class Product {
  private sellerId: ObjectId;
  public _id: ObjectId | undefined;
  private productName: string = '';
  private productDescription: string = '';
  private productVarients: Array<ObjectId> = [];
  private categoryId: ObjectId;
  private productReviews: Array<ObjectId> = [];
  private productRating: number = 5.0;
  private createdDate: number;

  constructor(
    sellerId: ObjectId,
    name: string,
    description: string,
    categoryId: ObjectId,
    varients: Array<ObjectId>,
    id?: ObjectId,
    createdDate?: number
  ) {
    this.sellerId = sellerId;
    this.productName = name;
    this.productDescription = description;
    this.categoryId = categoryId;
    this.productVarients = varients;
    this._id = id ?? undefined;
    this.createdDate = createdDate ?? Date.now();
  }

  get Id() {
    return this._id;
  }

  get SellerId() {
    return this.sellerId;
  }

  get CreatedDate() {
    return this.createdDate;
  }

  get ProductRating() {
    return this.productRating;
  }

  set ProductName(name: string) {
    this.productName = name;
  }
  get ProductName() {
    return this.productName;
  }

  set ProductDescription(description: string) {
    this.productDescription = description;
  }
  get ProductDescription() {
    return this.productDescription;
  }

  set CategoryId(categoryId: ObjectId) {
    this.categoryId = categoryId;
  }
  get CategoryId() {
    return this.categoryId;
  }

  set ProductVarients(varients: Array<ObjectId>) {
    this.productVarients = varients;
  }
  get ProductVarients() {
    return this.productVarients;
  }

  set ProductReviews(reviews: Array<ObjectId>) {
    this.productReviews = reviews;
  }
  get ProductReviews() {
    return this.productReviews;
  }

  async pushToDatabase() {
    try {
      if (this._id) {
        throw new Error('This document already exists on the database.');
      }

      const db = await getDatabase();
      const collection = db.collection('products');
      return await collection.insertOne(this);
    } catch (error) {
      console.log('[-] COULD NOT PUSH NEW PRODUC TO THE DATABASE...');
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
      const collection = db.collection('products');
      return await collection.updateOne({ _id: this._id }, this);
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
      const collection = db.collection('products');
      const doc = await collection.findOne({ _id: id });

      if (doc) {
        return new Product(
          doc.sellerId,
          doc.productName,
          doc.productDescription,
          doc.categoryId,
          doc.productVarients,
          doc._id,
          doc.createdDate
        );
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
      const collection = db.collection('products');
      return await collection.deleteOne({ _id: id });
    } catch (error) {
      console.log('=====================ERROR=====================');
      console.log(error);
      console.log('===============================================');
    }
  }
}

export default Product;
