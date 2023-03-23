import getDatabase from '@/lib/getDBClient';
import { ObjectId } from 'mongodb';

class TransactionRecord {
  public _id: ObjectId | undefined;
  private transactionUserId: ObjectId;
  private transactionShopId: ObjectId;
  private transactionProducts: Array<{
    productId: ObjectId;
    productCount: number;
  }> = [];
  private transactionDate: number;

  constructor(
    userId: ObjectId,
    shopId: ObjectId,
    products: Array<{ productId: ObjectId; productCount: number }>,
    transactionDate: number = Date.now(),
    id?: ObjectId | undefined
  ) {
    this._id = id ?? undefined;
    this.transactionUserId = userId;
    this.transactionShopId = shopId;
    this.transactionDate = transactionDate;
    this.transactionProducts = products;
  }

  get Record() {
    return {
      id: this._id,
      userId: this.transactionUserId,
      shopId: this.transactionShopId,
      date: this.transactionDate,
      products: this.transactionProducts,
    };
  }

  async pushToDatabase() {
    try {
      if (this._id) {
        throw new Error('This is document already exists on the database.');
      }

      const db = await getDatabase();
      const collection = db.collection('transactions');
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
      const collection = db.collection('transactions');
      const doc = await collection.findOne({ _id: id });

      if (doc) {
        return new TransactionRecord(
          doc.transactionUserId,
          doc.transactionShopId,
          doc.transactionProducts,
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
      const collection = db.collection('transactions');
      const cursor = collection.find({ transactionUserId: id });

      const docsArray = await cursor.toArray();

      const transactionRecords = docsArray.map((doc) => {
        return new TransactionRecord(
          doc.transactionUserId,
          doc.transactionShopId,
          doc.transactionProducts,
          doc.transactionDate
        );
      });

      return transactionRecords;
    } catch (error) {
      console.log('=====================ERROR=====================');
      console.log(error);
      console.log('===============================================');
    }
  }

  static async findByShopId(id: ObjectId) {
    try {
      const db = await getDatabase();
      const collection = db.collection('transactions');
      const cursor = collection.find({ transactionShopId: id });

      const docsArray = await cursor.toArray();

      const transactionRecords = docsArray.map((doc) => {
        return new TransactionRecord(
          doc.transactionUserId,
          doc.transactionShopId,
          doc.transactionProducts,
          doc.transactionDate,
          doc._id
        );
      });

      return transactionRecords;
    } catch (error) {
      console.log('=====================ERROR=====================');
      console.log(error);
      console.log('===============================================');
    }
  }

  static async findByCreatedDate(date: number) {
    try {
      const db = await getDatabase();
      const collection = db.collection('transactions');
      const cursor = collection.find({ transactionDate: date });

      const docsArray = await cursor.toArray();

      const transactionRecords = docsArray.map((doc) => {
        return new TransactionRecord(
          doc.transactionUserId,
          doc.transactionShopId,
          doc.transactionProducts,
          doc.transactionDate,
          doc._id
        );
      });

      return transactionRecords;
    } catch (error) {
      console.log('=====================ERROR=====================');
      console.log(error);
      console.log('===============================================');
    }
  }
}

export default TransactionRecord;
