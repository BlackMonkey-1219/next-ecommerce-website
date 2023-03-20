import Product from '@/models/Product';
import ProductVarient from '@/models/ProductVarient';
import Seller from '@/models/Seller';
import { DataAddProduct } from '@/types/product_route_types';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('ADD PRODUCT');
  console.log('REQ BODY: ', req.body, '\n');
  const {
    seller_id,
    product_name,
    product_description,
    product_varients,
    product_category_id,
  } = req.body as DataAddProduct;

  try {
    // CREATE VARIENTS
    const productVarients = product_varients.map((varientData) => {
      return new ProductVarient(
        varientData.varient_name,
        varientData.varient_description,
        varientData.varient_price
      );
    });

    console.log('VARIENTS: ', productVarients, '\n');

    // CREATE THE PRODUCT
    const product = new Product(
      ObjectId.createFromHexString(seller_id),
      product_name,
      product_description,
      new ObjectId(), //CATEGORY ID
      productVarients
    );
    const productCreationResult = await product.pushToDatabase();
    console.log(productCreationResult, '\n');

    // ADD PRODUCT TO SELLER PROFILE
    const seller = await Seller.findById(
      ObjectId.createFromHexString(seller_id)
    );
    console.log(seller, '\n');

    seller!.Products = [...seller!.Products, productCreationResult!.insertedId];
    console.log(seller, '\n');

    const sellerProfileUpdateResult = await seller?.saveChanges();
    console.log(sellerProfileUpdateResult, '\n');

    res.json({ message: '[+] PRODUCT CREATED SUCCESSFULLY...' });
  } catch (error) {
    console.log('[-] FAILED TO CREATE PRODUCT...');
    console.log(error, '\n');
    res.json({ message: '[-] FAILED TO CREATE PRODUCT...' });
  }
  endSection();
}
