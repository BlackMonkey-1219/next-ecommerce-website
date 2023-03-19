import Product from '@/models/Product';
import ProductReview from '@/models/ProductReview';
import ProductVarient from '@/models/ProductVarient';
import Seller from '@/models/Seller';
import { DataRemoveProduct } from '@/types/product_route_types';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('REMOVE PRODUCT');
  console.log('REQ BODY: ', req.body);

  const { product_id, seller_id } = req.body as DataRemoveProduct;

  const sellerId = ObjectId.createFromHexString(seller_id);
  console.log(sellerId);
  const productId = ObjectId.createFromHexString(product_id);
  console.log(productId);

  // GET SELLER & PRODUCT
  const product = await Product.findById(productId);
  console.log(product);
  const seller = await Seller.findById(sellerId);
  console.log(seller);

  // REMOVE PRODUCT FROM SELLER
  try {
    const products = seller!.Products;
    console.log('[i] PRODUCTS: ', products);
    seller!.Products = products.filter((id) => {
      if (id !== productId) {
        return id;
      }
    });

    const sellerUpdateResult = await seller!.saveChanges();
    console.log(sellerUpdateResult);
  } catch (error) {
    console.log('[-] COULD NOT REMOVE PRODUCT FROM SELLER...');
    console.log(error, '\n');
  }

  // REMOVE VARIENTS
  try {
    const productVarients = product!.ProductVarients;
    console.log('[i] PRODUCT VARIENTS: ', productVarients);
    const varientsDeletePromises = productVarients.map((varientId) => {
      return ProductVarient.deleteById(varientId);
    });

    const varientsRemoveResult = await Promise.all(varientsDeletePromises);
    console.log(varientsRemoveResult);
  } catch (error) {
    console.log('[-] COULD NOT REMOVE VARIENTS...');
    console.log(error, '\n');
  }

  // REMOVE REVIEWS
  try {
    const productReviews = product!.ProductReviews;
    console.log('[i] PRODUCT REVIEWS: ', productReviews);
    const reviewDeletePromises = productReviews.map((reviewId) => {
      return ProductReview.deleteById(reviewId);
    });

    const reviewDeleteResults = await Promise.all(reviewDeletePromises);
    console.log(reviewDeleteResults);
  } catch (error) {
    console.log('[-] COULD NOT REMOVE REVIEWS...');
    console.log(error, '\n');
  }

  // REOMOVE PRODUCT
  try {
    const productRemoveResult = await Product.deleteById(productId);
    console.log(productRemoveResult);
  } catch (error) {
    console.log('[-] COULD NOT REMOVE PRODUCT...');
    console.log(error, '\n');
  }

  res.json({ message: '[+] Product Deleted Succesfully...' });
  endSection();
}
