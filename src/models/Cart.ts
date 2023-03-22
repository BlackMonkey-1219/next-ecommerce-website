import getDatabase from '@/lib/getDBClient';
import { ObjectId } from 'mongodb';

class Cart {
  public _id: ObjectId | undefined;
  private cartOwnerId: ObjectId;
  private cartItems: Array<{ productId: ObjectId; productCount: number }>;

  constructor(
    cartOwnerId: ObjectId,
    cartItems: Array<{ productId: ObjectId; productCount: number }> = [],
    id: ObjectId | undefined = undefined
  ) {
    this._id = id;
    this.cartOwnerId = cartOwnerId;
    this.cartItems = cartItems;
  }

  get OwnerId() {
    return this.cartOwnerId;
  }

  set CartItems(
    products: Array<{ productId: ObjectId; productCount: number }>
  ) {
    this.cartItems = products;
  }
  get CartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }

  async pushToDatabase() {
    try {
      if (this._id) {
        throw new Error(
          '[-] THIS CART ALREADY EXISTS ON THE DATABASE. TRY SAVING...'
        );
      }

      const db = await getDatabase();
      const collection = db.collection('carts');
      return await collection.insertOne(this);
    } catch (error) {
      console.log('[-] COULD NOT UPDATE CART...');
      console.log('==================== ERROR ====================');
      console.log(error, '\n');
      console.log('===============================================');
    }
  }

  async saveChanges() {
    try {
      if (!this._id) {
        throw new Error(
          '[-] THIS CART DOES NOT EXIST ON THE DATABASE. TRY PUSHING FRIST...'
        );
      }

      const db = await getDatabase();
      const collection = db.collection('carts');
      return await collection.updateOne(
        { _id: this._id },
        { $set: { ...this } }
      );
    } catch (error) {
      console.log('[-] COULD NOT UPDATE CART...');
      console.log('==================== ERROR ====================');
      console.log(error, '\n');
      console.log('===============================================');
    }
  }

  static async findById(cartId: ObjectId) {
    try {
      const db = await getDatabase();
      const collection = db.collection('carts');
      const cart = await collection.findOne({ _id: cartId });

      if (cart) {
        return new Cart(cart.cartItems, cart.cartOwnerId, cart._id);
      } else {
        throw new Error('[-] COULD NOT FIND THE CART');
      }
    } catch (error) {
      console.log(`[-] COULD NOT FIND THE CART WITH ID: ${cartId}`);
      console.log('==================== ERROR ====================');
      console.log(error, '\n');
      console.log('===============================================');
    }
  }

  static async findByCartOwnerId(cartOwnerId: ObjectId) {
    try {
      const db = await getDatabase();
      const collection = db.collection('carts');
      const cart = await collection.findOne({ cartOwnerId: cartOwnerId });

      if (cart) {
        return new Cart(cart.cartItems, cart.cartOwnerId, cart._id);
      } else {
        throw new Error('[-] COULD NOT FIND THE CART');
      }
    } catch (error) {
      console.log(`[-] COULD NOT FIND THE CART WITH ID: ${cartOwnerId}`);
      console.log('==================== ERROR ====================');
      console.log(error, '\n');
      console.log('===============================================');
    }
  }
}

export default Cart;
