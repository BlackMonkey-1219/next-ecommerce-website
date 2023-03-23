import { ObjectId, WithId } from 'mongodb';
import User from './User';
import getDatabase from '@/lib/getDBClient';

class Seller extends User {
  private shopId: ObjectId | undefined;
  private products: Array<ObjectId> = [];
  private sellerRating: number = 5;
  private sellerNIC: string = '';

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    contactNumber: string,
    country: string,
    state: string,
    city: string,
    postalCode: string,
    address: Array<string>,
    id: ObjectId,
    NIC: string,
    products: Array<ObjectId> = [],
    shopId?: ObjectId,
    sellerRating?: number
  ) {
    super(
      firstName,
      lastName,
      age,
      email,
      contactNumber,
      country,
      state,
      city,
      postalCode,
      address,
      id
    );
    this.sellerNIC = NIC;
    this.shopId = shopId ?? undefined;
    this.sellerRating = sellerRating ?? 5;
    this.products = products;
  }

  get Id() {
    return this._id;
  }

  get SellerRating() {
    return this.sellerRating;
  }

  set NIC(nic: string) {
    this.sellerNIC = nic;
  }
  get NIC() {
    return this.sellerNIC;
  }

  set ShopID(id: ObjectId | undefined) {
    this.shopId = id;
  }
  get ShopID() {
    return this.shopId!;
  }

  set Products(productIds: Array<ObjectId>) {
    this.products = productIds;
  }
  get Products() {
    return this.products;
  }

  override async pushToDataBase() {
    try {
      const db = await getDatabase();
      const collection = db.collection('sellers');
      return await collection.insertOne(this);
    } catch (error) {
      console.log('[-] COULD NOT PUSH NEW SELLER TO THE DATBASE...');
      console.log('===============ERROR===============');
      console.log(error);
      console.log('===================================');
    }
  }

  override async saveChanges() {
    try {
      const db = await getDatabase();
      const collection = db.collection('sellers');
      return await collection.updateOne(
        { _id: this._id },
        { $set: { ...this } }
      );
    } catch (error) {
      console.log('[-] COULD NOT SAVE CHANGES TO THE DATABASE...');
      console.log('===============ERROR===============');
      console.log(error);
      console.log('===================================');
    }
  }

  static override async findById(id: ObjectId) {
    try {
      const db = await getDatabase();
      const collection = db.collection('sellers');
      const doc = await collection.findOne({
        _id: id,
      });

      if (doc) {
        return new Seller(
          doc.userFirstName,
          doc.userLastName,
          doc.userAge,
          doc.userEmail,
          doc.userContactNumber,
          doc.userCountry,
          doc.userState,
          doc.userCity,
          doc.userPostalCode,
          doc.userAddress,
          doc._id,
          doc.sellerNIC,
          doc.products,
          doc.shopId,
          doc.sellerRating
        );
      } else {
        return null;
      }
    } catch (error) {
      console.log('[-] COULD NOT FETCH USER...');
      console.log(error, '\n');
    }
  }

  static override async deleteById(id: ObjectId) {
    try {
      const db = await getDatabase();
      const collection = db.collection('sellers');
      return await collection.deleteOne({ _id: id });
    } catch (error) {
      console.log('[-] COULD NOT DELETE USER...');
      console.log(error, '\n');
    }
  }
}

export default Seller;
