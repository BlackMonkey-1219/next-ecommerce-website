import getDatabase from '@/lib/getDBClient';
import { ObjectId } from 'mongodb';

class User {
  public _id: ObjectId | undefined;
  protected userFirstName: string = '';
  protected userLastName: string = '';
  protected userAge: number = 17;
  protected userCountry: string = '';
  protected userState: string = '';
  protected userCity: string = '';
  protected userPostalCode: number = 0;
  protected userAddress: Array<string> = [];
  protected userEmail: string = '';
  protected userContactNumber: string = '';

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    contactNumber: string,
    country: string,
    state: string,
    city: string,
    postalCode: number,
    address: Array<string>,
    id: ObjectId
  ) {
    this.userFirstName = firstName;
    this.userLastName = lastName;
    this.userAge = age;
    this.userContactNumber = contactNumber;
    this.userEmail = email;
    this.userCountry = country;
    this.userState = state;
    this.userCity = city;
    this.userAddress = address;
    this.userPostalCode = postalCode;
    this._id = id ?? undefined;
  }

  get Id() {
    return this._id;
  }

  set FirstName(name: string) {
    this.userFirstName = name;
  }
  get FirstName() {
    return this.userFirstName;
  }

  set LastName(name: string) {
    this.userLastName = name;
  }
  get LastName() {
    return this.userLastName;
  }

  set Age(age: number) {
    this.userAge = age;
  }
  get Age() {
    return this.userAge;
  }

  set Email(email: string) {
    this.userEmail = email;
  }
  get Email() {
    return this.userEmail;
  }

  set Contact(contact: string) {
    this.userContactNumber = contact;
  }
  get Contact() {
    return this.userContactNumber;
  }

  set Address(address: Array<string>) {
    this.userAddress = address;
  }
  get Address() {
    return this.userAddress;
  }

  set City(city: string) {
    this.userCity = city;
  }
  get City() {
    return this.userCity;
  }

  set State(state: string) {
    this.userState = state;
  }
  get State() {
    return this.userState;
  }

  set Country(country: string) {
    this.userCountry = country;
  }
  get Country() {
    return this.userCountry;
  }

  set PostalCode(code: number) {
    this.userPostalCode = code;
  }
  get PostalCode() {
    return this.userPostalCode;
  }

  async pushToDataBase() {
    try {
      if (this._id) {
        throw new Error('This is document already exists on the database.');
      }

      const db = await getDatabase();
      const collection = db.collection('users');
      collection.insertOne(this);
    } catch (error) {
      console.log('[-] COULD NOT PUSH NEW USER TO THE DATABASE...');
      console.log('===============ERROR===============');
      console.log(error);
      console.log('===================================');
    }
  }

  async saveChanges() {
    try {
      if (!this._id) {
        throw new Error('This is a new document. Try pushing to the database.');
      }

      const db = await getDatabase();
      const collection = db.collection('users');
      return await collection.updateOne({ _id: this._id }, this);
    } catch (error) {
      console.log('[-] COULD NOT SAVE CHANGES TO THE DATABASE...');
      console.log('===============ERROR===============');
      console.log(error);
      console.log('===================================');
    }
  }

  static async findById(id: ObjectId) {
    try {
      const db = await getDatabase();
      const collection = db.collection('users');
      const doc = await collection.findOne({ _id: id });
      if (doc) {
        return new User(
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
          doc._id
        );
      } else {
        return null;
      }
    } catch (error) {
      console.log('[-] COULD NOT FETCH USER...');
      console.log('===============ERROR===============');
      console.log(error);
      console.log('===================================');
    }
  }

  static async deleteById(id: ObjectId) {
    try {
      const db = await getDatabase();
      const collection = db.collection('users');
      return await collection.deleteOne({ _id: id });
    } catch (error) {
      console.log('[-] COULD NOT DELETE USER...');
      console.log('===============ERROR===============');
      console.log(error);
      console.log('===================================');
    }
  }
}

export default User;
