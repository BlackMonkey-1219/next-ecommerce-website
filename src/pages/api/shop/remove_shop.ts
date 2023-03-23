import Seller from '@/models/Seller';
import Shop from '@/models/Shop';
import { RemoveShopRequest } from '@/types/shop_route_types';
import startSection from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('REMOVE SHOP');
  console.log('REQ BODY: ', req.body, '\n');

  try {
    const { shop_id } = req.body as RemoveShopRequest;

    // GRAB SHOP
    const shop = await Shop.findById(ObjectId.createFromHexString(shop_id));

    if (shop) {
      const sellerId = shop.OwnerId;
      console.log('[i] SHOP OWNER ID: ', sellerId, '\n');

      // REMOVE SHOP
      const shopRemoveResult = await Shop.deleteById(
        ObjectId.createFromHexString(shop_id)
      );
      console.log(shopRemoveResult, '\n');

      // GRAB SELLER
      const seller = await Seller.findById(sellerId);
      console.log(seller, '\n');

      // REMOVE SHOP FROM SELLER
      if (seller) {
        seller.ShopID = undefined;
        const sellerProfileUpdateResult = await seller.saveChanges();
        console.log(sellerProfileUpdateResult, '\n');
      } else {
        throw new Error(`[-] COULD NOT FIND A SELLER WITH ID: ${sellerId}`);
      }
    } else {
      throw new Error(`[-] COULD NOT FIND THE SHOP WITH ID: ${shop_id}`);
    }

    console.log('[+] SHOP REMOVED SUCCESSFULLY...');
    res.json({ message: '[+] SHOP REMOVED SUCCESSFULLY...' });
  } catch (error) {
    console.log('[-] COULD NOT REMOVE THE SHOP...');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT REMOVE THE SHOP...' });
  }
}
