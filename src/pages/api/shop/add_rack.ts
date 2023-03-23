import Rack from '@/models/Rack';
import Shop from '@/models/Shop';
import { AddRackRequest } from '@/types/shop_route_types';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('ADD RACK');
  console.log('REQ BODY: ', req.body);

  try {
    const { shop_id, rack_name, rack_items } = req.body as AddRackRequest;

    // GET SHOP
    const shop = await Shop.findById(ObjectId.createFromHexString(shop_id));

    if (shop) {
      const productsObjectIds = rack_items.map((itemId) => {
        return ObjectId.createFromHexString(itemId);
      });

      // CREATE RACK
      const rack = new Rack(rack_name, productsObjectIds);

      // ADD RACK TO SHOP
      shop.ShopRacks = [...shop.ShopRacks, rack];

      // SAVE CHANGES
      const shopUpdateResult = await shop.saveChanges();
      console.log(shopUpdateResult);
    } else {
      throw new Error(`[-] COULD NOT FIND THE SHOP WITH ID: ${shop_id}`);
    }

    console.log('[+] RACK ADDED SUCCESSFULLY...');
    res.json({ message: '[+] RACK ADDED SUCCESSFULLY...' });
  } catch (error) {
    console.log('[-] COULD NOT ADD RACK TO THE SHOP...');
    console.error(error);
    res.json({ message: '[-] COULD NOT ADD RACK TO YOUR SHOP...' });
  }

  endSection();
}
