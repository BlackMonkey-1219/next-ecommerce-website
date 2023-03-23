import Product from '@/models/Product';
import ProductReview from '@/models/ProductReview';
import ProductVarient from '@/models/ProductVarient';
import Seller from '@/models/Seller';
import { RemoveProductRequest } from '@/types/product_route_types';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('REMOVE PRODUCT');
  console.log('REQ BODY: ', req.body);

  const { product_id, seller_id } = req.body as RemoveProductRequest;

  const sellerId = ObjectId.createFromHexString(seller_id);
  console.log(sellerId);
  const productId = ObjectId.createFromHexString(product_id);
  console.log(productId);

  try {
    // GET SELLER & PRODUCT
    const product = await Product.findById(productId);
    console.log(product);
    const seller = await Seller.findById(sellerId);
    console.log(seller);

    // REMOVE PRODUCT FROM SELLER
    const products = seller!.Products;
    console.log('[i] PRODUCTS: ', products);
    seller!.Products = products.filter((id) => {
      if (id.toString() !== productId.toString()) {
        return id;
      }
    });

    const sellerUpdateResult = await seller!.saveChanges();
    console.log(sellerUpdateResult, '\n');

    // REMOVE REVIEWS
    const productReviews = product!.ProductReviews;
    console.log('[i] PRODUCT REVIEWS: ', productReviews, '\n');
    const reviewDeletePromises = productReviews.map((reviewId) => {
      return ProductReview.deleteById(reviewId);
    });

    const reviewDeleteResults = await Promise.all(reviewDeletePromises);
    console.log(reviewDeleteResults);

    // REOMOVE PRODUCT
    const productRemoveResult = await Product.deleteById(productId);
    console.log(productRemoveResult);

    console.log('[+] PRODUCT REMOVED SUCCESSFULLY...\n');
    res.json({ message: '[+] PRODUCT DELETED SUCCESSFULLY...' });
  } catch (error) {
    console.log('[-] FAILED TO REMOVE PRODUCT...\n');
    console.log(error, '\n');

    res.json({ message: '[-] COULD NOT REMOVE PRODUCT...' });
  }

  endSection();
}
