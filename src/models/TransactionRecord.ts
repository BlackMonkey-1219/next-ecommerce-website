import getDatabase from '@/lib/getDBClient';
import { ObjectId } from 'mongodb';

class TransactionRecord {
  private id: ObjectId | undefined;
  private userId: ObjectId;
  private shopId: ObjectId;
  private products: Array<{ productId: ObjectId; productCount: number }> = [];
  private transactionDate: number = 0;

  constructor(
    userId: ObjectId,
    shopId: ObjectId,
    products: Array<{ productId: ObjectId; productCount: number }>,
    transactionDate?: number,
    id?: ObjectId
  ) {
    this.id = id ?? undefined;
    this.userId = userId;
    this.shopId = shopId;
    this.transactionDate = transactionDate ?? Date.now();
    this.products = products;
  }

  get Record() {
    return {
      id: this.id,
      userId: this.userId,
      shopId: this.shopId,
      date: this.transactionDate,
      products: this.products,
    };
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

  static async findById(id: ObjectId) {
    try {
      const db = await getDatabase();
      const collection = db.collection('racks');
      const doc = await collection.findOne({ id: id });

      if (doc) {
        return new TransactionRecord(
          doc.userId,
          doc.shopId,
          doc.products,
          doc.transactionDate,
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

  static async findByUserId(id: ObjectId) {
    try {
      const db = await getDatabase();
      const collection = db.collection('racks');
      const doc = await collection.findOne({ userId: id });

      if (doc) {
        return new TransactionRecord(
          doc.userId,
          doc.shopId,
          doc.products,
          doc.transactionDate,
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

  static async findByShopId(id: ObjectId) {
    try {
      const db = await getDatabase();
      const collection = db.collection('racks');
      const doc = await collection.findOne({ shopId: id });

      if (doc) {
        return new TransactionRecord(
          doc.userId,
          doc.shopId,
          doc.products,
          doc.transactionDate,
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
}

export default TransactionRecord;
