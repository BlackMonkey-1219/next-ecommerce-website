import getDatabase from '@/lib/getDBClient';
import { ObjectId } from 'mongodb';

class ProductVarient {
  private id: ObjectId | undefined;
  private varientName: string = '';
  private varientDescription: string = '';
  private varientPrice: number = 0;

  constructor(name: string, description: string, price: number, id?: ObjectId) {
    this.varientName = name;
    this.varientDescription = description;
    this.varientPrice = price;

    this.id = id ?? undefined;
  }

  get Id() {
    return this.id;
  }

  set VarientName(name: string) {
    this.varientName = name;
  }
  get VarientName() {
    return this.varientName;
  }

  set VarientDescription(text: string) {
    this.VarientDescription = text;
  }
  get VarientDescription() {
    return this.varientDescription;
  }

  set VarientPrice(price: number) {
    this.varientPrice = price;
  }
  get VarientPrice() {
    return this.varientPrice;
  }

  async pushToDatabase() {
    try {
      if (this.id) {
        throw new Error('This is document already exists on the database.');
      }

      const db = await getDatabase();
      const collection = db.collection('product_varients');
      return await collection.insertOne(this);
    } catch (error) {
      console.log('[-] COULD NOT PUSH PRODUCT VARIENT TO THE DATABASE...');
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
      const collection = db.collection('product_varients');
      collection.updateOne({ id: this.id }, this);
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
      const collection = db.collection('product_varients');
      const doc = await collection.findOne({ id: id });

      if (doc) {
        return new ProductVarient(
          doc.varientName,
          doc.varientDescription,
          doc.varientPrice,
          doc._id
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
      const collection = db.collection('product_varient');
      return await collection.deleteOne({ id: id });
    } catch (error) {
      console.log('=====================ERROR=====================');
      console.log(error);
      console.log('===============================================');
    }
  }
}

export default ProductVarient;
