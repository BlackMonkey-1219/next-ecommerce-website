import Seller from '@/models/Seller';
import Shop from '@/models/Shop';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('CREATE SHOP');
  console.log('REQ BODY: ', req.body, '\n');
  try {
    const { seller_id, shop_name, shop_description } = req.body;

    // CHECK IF THERE IS ALREADY A SHOP
    const isShop = await Shop.findBySellerId(seller_id);
    if (isShop) {
      throw new Error('[-] THIS SELLER ALREADY OWNS A SHOP...');
    }

    // CREATE NEW SHOP
    const shop = new Shop(
      ObjectId.createFromHexString(seller_id),
      shop_name,
      shop_description
    );

    // PUSH SHOP TO DATABASE
    const shopPushResult = await shop.pushToDataBase();
    const shopId = shopPushResult?.insertedId;

    // ADD SHOP TO SELLER PROFILE
    const seller = await Seller.findById(
      ObjectId.createFromHexString(seller_id)
    );

    if (shopId && seller) {
      seller.ShopID = shopId;
      const profileUpdateResult = await seller.saveChanges();
      console.log(profileUpdateResult, '\n');
    } else {
      throw new Error('[-] SOMETHING WENT WRONG...\n');
    }

    console.log('[+] SHOP CREATED SUCCESSFULLY...\n');
    res.json({ message: '[+] SHOP CREATED SUCCESSFULLY...' });
  } catch (error) {
    console.log('[-] COULD NOT CREATE SHOP...\n');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT CREATE SHOP...' });
  }
  endSection();
}
