import Product from '@/models/Product';
import ProductVarient from '@/models/ProductVarient';
import { DataAddProduct } from '@/types/product_route_types';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('ADD PRODUCT');
  console.log('REQ BODY: ', req.body);
  const {
    seller_id,
    product_name,
    product_description,
    product_varients,
    product_category_id,
  } = req.body as DataAddProduct;

  try {
    // CREATE VARIENTS & GET IDS
    const varientPushPromises = product_varients.map((varient) => {
      const varientObject = new ProductVarient(
        varient.varient_name,
        varient.varient_description,
        varient.varient_price
      );

      return varientObject.pushToDatabase();
    });

    const promisesResults = await Promise.all(varientPushPromises);
    const varientIds = promisesResults.map((result) => {
      return result!.insertedId;
    });

    // CREATE THE PRODUCT
    const product = new Product(
      new ObjectId(), //SELLER ID
      product_name,
      product_description,
      new ObjectId(), //CATEGORY ID
      varientIds
    );
    const productCreationResult = await product.pushToDatabase();

    res.json({ message: '[+] PRODUCT CREATED SUCCESSFULLY...' });
    endSection();
  } catch (error) {
    console.log('[-] FAILED TO CREATE PRODUCT...');
    console.log(error, '\n');
    res.json({ message: '[-] FAILED TO CREATE PRODUCT...' });
  }
}
