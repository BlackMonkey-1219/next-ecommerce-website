import Rack from '@/models/Rack';
import Shop from '@/models/Shop';
import { UpdateRackRequest } from '@/types/shop_route_types';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('UPDATE RACK');
  console.log('REQ BODY: ', req.body);

  try {
    const { shop_id, rack_id, rack_name, rack_items } =
      req.body as UpdateRackRequest;

    // GET SHOP
    const shop = await Shop.findById(ObjectId.createFromHexString(shop_id));

    if (shop) {
      // GET RACKS
      const racks = shop.ShopRacks;
      console.log('RACKS: ', racks, '\n');

      // GET RACK AND UPDATE
      const updatedRacks = racks.map((rack) => {
        if (rack.Id !== rack_id) {
          return rack;
        }

        rack.RackName = rack_name;

        const rackItems = rack_items.map((id) => {
          return ObjectId.createFromHexString(id);
        });
        rack.RackItems = rackItems;

        return rack;
      });
      console.log('UPDATED RACKS: ', updatedRacks, '\n');

      // SAVE RACKS TO SHOP
      shop.ShopRacks = updatedRacks as Array<Rack>;

      // SAVE SHOP CHANGES
      const shopUpdateResult = await shop.saveChanges();
      console.log(shopUpdateResult);
    } else {
      throw new Error(`[-] COULD NOT FIND THE SHOP WITH ID: ${shop_id}`);
    }

    console.log('[+] RACK UPDATED SUCCESSFULLY...');
    res.json({ message: '[+] RACK UPDATED SUCCESSFULLY...' });
  } catch (error) {
    console.log('[-] COULD NOT UPDATE THE RACK...');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT UPDATE THE RACK...' });
  }

  endSection();
}
