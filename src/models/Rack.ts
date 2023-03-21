import { ObjectId } from 'mongodb';

class Rack {
  private _id: ObjectId;
  private rackName: string;
  private rackItems: Array<ObjectId>;

  constructor(
    name: string,
    rackItems: Array<ObjectId> = [],
    id: ObjectId | undefined = undefined
  ) {
    this.rackName = name;
    this.rackItems = rackItems;
    this._id = id ?? new ObjectId();
  }

  get Id() {
    return this._id;
  }

  set RackName(name: string) {
    this.rackName = name;
  }
  get RackName() {
    return this.rackName;
  }

  set RackItems(productIds: Array<ObjectId>) {
    this.rackItems = productIds;
  }
  get RackItems() {
    return this.rackItems;
  }
}

export default Rack;
