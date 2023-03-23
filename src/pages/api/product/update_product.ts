import Product from '@/models/Product';
import { UpdateProductRequest } from '@/types/product_route_types';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('PRODUCT UPDATE');
  console.log('REQ BODY: ', req.body);

  const { product_id, product_name, product_description, product_category_id } =
    req.body as UpdateProductRequest;

  const productId = ObjectId.createFromHexString(product_id);
  try {
    // FIND PRODUCT BY ID
    const product = await Product.findById(productId);

    // UPDATE PRODUCT
    product!.ProductName = product_name;
    product!.ProductDescription = product_description;
    product!.CategoryId = product_category_id
      ? ObjectId.createFromHexString(product_category_id)
      : new ObjectId();

    // SAVE CHANGES
    const saveResult = await product!.saveChanges();
    console.log(saveResult);

    res.json({ message: '[+] PRODUCT UPDATED SUCCESSFULLY...' });
  } catch (error) {
    console.log('[-] COULD NOT UPDATE PRODUCT DATA...');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT UPDATE PRODUCT DATA...' });
  }
  endSection();
}
