import Shop from '@/models/Shop';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('UPDATE SHOP');
  console.log('REQ BODY: ', req.body);

  try {
    const {
      shop_id,
      shop_name,
      shop_description,
      shop_contact_number,
      shop_email,
    } = req.body;

    // GRAB SHOP
    const shop = await Shop.findById(ObjectId.createFromHexString(shop_id));

    if (shop) {
      // UPDATE DATA
      shop.ShopName = shop_name;
      shop.ShopDescription = shop_description;
      shop.ShopContactNumber = shop_contact_number;
      shop.ShopEmail = shop_email;

      // SAVE CHANGES
      const shopUpdateResult = await shop.saveChanges();
      console.log(shopUpdateResult);
    } else {
      throw new Error(`[-] COULD NOT FIND A SHOP WITH ID: ${shop_id}`);
    }

    console.log('[+] SHOP UPDATED SUCCESSFULLY...\n');
    res.json({ message: '[+] SHOP DATA UPDATED SUCCESSFULLY...' });
  } catch (error) {
    console.log('[-] COULD NOT UPDATE SHOP...\n');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT UPDATE SHOP DATA...\n' });
  }

  endSection();
}
