import getDatabase from '@/lib/getDBClient';
import { ObjectId } from 'mongodb';

class ProductReview {
  public _id: ObjectId | undefined;
  private reviewUserId: ObjectId;
  private reviewProductId: ObjectId;
  private reviewProductRating: number = 5.0;
  private reviewProductReview: string = '';
  private reviewCreatedDate: number;

  constructor(
    userId: ObjectId,
    productId: ObjectId,
    rating: number,
    description: string,
    createdDate: number = Date.now(),
    id: ObjectId | undefined = undefined
  ) {
    this._id = id;
    this.reviewUserId = userId;
    this.reviewProductId = productId;
    this.reviewProductRating = rating;
    this.reviewProductReview = description;
    this.reviewCreatedDate = createdDate;
  }

  get Id() {
    return this._id;
  }

  get UserId() {
    return this.reviewUserId;
  }

  get ProductId() {
    return this.reviewProductId;
  }

  get Rating() {
    return this.reviewProductRating;
  }

  get Review() {
    return this.reviewProductReview;
  }

  get CreatedDate() {
    return this.reviewCreatedDate;
  }

  async pushToDatabase() {
    try {
      if (this._id) {
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
      const doc = await collection.findOne({ _id: id });

      if (doc) {
        return new ProductReview(
          doc.reviewUserId,
          doc.reviewProductId,
          doc.reviewProductRating,
          doc.reviewProductDescription,
          doc.reviewCreatedDate
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
      const collection = db.collection('product_reviews');
      const cursor = collection.find({ reviewUserId: id });

      const docsArray = await cursor.toArray();

      const reviewArray = docsArray.map((doc) => {
        return new ProductReview(
          doc.reviewUserId,
          doc.reviewProductId,
          doc.reviewProductRating,
          doc.reviewProductDescription,
          doc.reviewCreatedDate
        );
      });

      return reviewArray;
    } catch (error) {
      console.log('=====================ERROR=====================');
      console.log(error);
      console.log('===============================================');
    }
  }

  static async findByProductId(id: ObjectId) {
    try {
      const db = await getDatabase();
      const collection = db.collection('product_reviews');
      const cursor = collection.find({ reviewProductId: id });

      const docsArray = await cursor.toArray();

      const reviewArray = docsArray.map((doc) => {
        return new ProductReview(
          doc.reviewUserId,
          doc.reviewProductId,
          doc.reviewProductRating,
          doc.reviewProductDescription,
          doc.reviewCreatedDate
        );
      });

      return reviewArray;
    } catch (error) {
      console.log('=====================ERROR=====================');
      console.log(error);
      console.log('===============================================');
    }
  }

  static async findByRating(rating: number) {
    try {
      const db = await getDatabase();
      const collection = db.collection('product_reviews');
      const cursor = collection.find({ reviewProductRating: rating });

      const docsArray = await cursor.toArray();

      const reviewArray = docsArray.map((doc) => {
        return new ProductReview(
          doc.reviewUserId,
          doc.reviewProductId,
          doc.reviewProductRating,
          doc.reviewProductDescription,
          doc.reviewCreatedDate
        );
      });

      return reviewArray;
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
