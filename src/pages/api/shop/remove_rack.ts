import Rack from '@/models/Rack';
import Shop from '@/models/Shop';
import { RemoveRackRequest } from '@/types/shop_route_types';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('REMOVE RACK');
  console.log('REQ BODY: ', req.body);

  try {
    const { shop_id, rack_id } = req.body as RemoveRackRequest;

    // GET SHOP
    const shop = await Shop.findById(ObjectId.createFromHexString(shop_id));

    if (shop) {
      console.log(shop.ShopRacks);

      // FILTER OUT RACKS
      const filteredRacks = shop.ShopRacks.filter((rack) => {
        if (rack.Id !== rack_id) {
          return rack;
        }
      });
      console.log(filteredRacks);
      shop.ShopRacks = filteredRacks as Array<Rack>;

      // SAVE CHANGES
      const shopUpdateResult = await shop.saveChanges();
      console.log(shopUpdateResult);
    } else {
      throw new Error(`[-] COULD NOT FIND THE SHOP WITH ID: ${shop_id}`);
    }

    console.log('[+] RACK REMOVED SUCCESSFULLY...');
    res.json({ message: '[+] RACK REMOVED SUCCESSFULLY...' });
  } catch (error) {
    console.log('[-] COULD NOT REMOVE THE RACK...');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT REMOVE THE RACK...' });
  }

  endSection();
}
