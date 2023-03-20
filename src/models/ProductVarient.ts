import { ObjectId } from 'mongodb';

class ProductVarient {
  public _id: ObjectId | undefined;
  private varientName: string = '';
  private varientDescription: string = '';
  private varientPrice: string = '';

  constructor(name: string, description: string, price: string, id?: ObjectId) {
    this.varientName = name;
    this.varientDescription = description;
    this.varientPrice = price;

    this._id = id ?? new ObjectId();
  }

  get Id() {
    return this._id;
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

  set VarientPrice(price: string) {
    this.varientPrice = price;
  }
  get VarientPrice() {
    return this.varientPrice;
  }
}

export default ProductVarient;
