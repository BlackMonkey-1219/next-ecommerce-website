import { ObjectId } from 'mongodb';

class Rack {
  private id: string;
  private rackName: string = '';
  private rackItems: Array<ObjectId>;

  constructor(
    name: string,
    rackItems: Array<ObjectId> = [],
    id: string | undefined = undefined
  ) {
    this.rackName = name;
    this.rackItems = rackItems;
    this.id = id ?? new ObjectId().toString();
  }

  get Id() {
    return this.id;
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
