import Product from '@/models/Product';
import Seller from '@/models/Seller';
import Shop from '@/models/Shop';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { RemoveSellerProfileRequest } from '../../../types/seller_route_types';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('REMOVE SELLER PROFILE');
  console.log('REQ BODY: ', req.body);

  const { seller_id } = req.body as RemoveSellerProfileRequest;

  try {
    const seller = await Seller.findById(
      ObjectId.createFromHexString(seller_id)
    );

    // GRAB PRODUCTS
    const products = seller?.Products;
    console.log('PRODUCTS: ', products, '\n');

    // DELETE PRODUCTS
    if (products) {
      const productsDeletePromises = products?.map((productId) => {
        return Product.deleteById(productId);
      });
      console.log(await Promise.all(productsDeletePromises), '\n');
    }

    // DELETE SHOP
    if (seller?.ShopID) {
      const shopDeleteResult = await Shop.deleteById(seller!.ShopID);
      console.log(shopDeleteResult, '\n');
    }

    // DELETE PROFILE
    const profileDeleteResult = await Seller.deleteById(
      ObjectId.createFromHexString(seller_id)
    );
    console.log(profileDeleteResult, '\n');

    res.json({ message: '[+] DELETED SELLER PROFILE SUCCESSFULLY...' });
  } catch (error) {
    console.log('[-] COULD NOT DELETE SELLER PROFILE...');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT DELETE SELLER PROFILE...' });
  }

  endSection();
}
