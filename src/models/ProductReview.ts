import getDatabase from '@/lib/getDBClient';
import { ObjectId } from 'mongodb';

class ProductReview {
  private id: ObjectId | undefined;
  private userId: ObjectId;
  private productRating: number = 5.0;
  private productReview: string = '';
  private createdDate: number;

  constructor(
    userId: ObjectId,
    productId: ObjectId,
    rating: number,
    description: string,
    createdDate: number = Date.now()
  ) {
    this.id = productId;
    this.userId = userId;
    this.productRating = rating;
    this.productReview = description;
    this.createdDate = createdDate;
  }

  get Id() {
    return this.id;
  }

  get UserId() {
    return this.userId;
  }

  get Rating() {
    return this.productRating;
  }

  get Review() {
    return this.productReview;
  }

  get CreatedDate() {
    return this.createdDate;
  }

  async pushToDatabase() {
    try {
      if (this.id) {
        throw new Error('This is document already exists on the database.');
      }

      const db = await getDatabase();
      const collection = db.collection('product_reviews');
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
      const collection = db.collection('product_reviews');
      const doc = await collection.findOne({ id: id });

      if (doc) {
        return new ProductReview(
          doc.userId,
          doc.productId,
          doc.rating,
          doc.description,
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
      const collection = db.collection('product_reviews');
      return await collection.deleteOne({ id: id });
    } catch (error) {
      console.log('=====================ERROR=====================');
      console.log(error);
      console.log('===============================================');
    }
  }
}

export default ProductReview;
