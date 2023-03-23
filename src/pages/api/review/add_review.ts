import ProductReview from '@/models/ProductReview';
import { AddReviewRequest } from '@/types/review_route_types';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('ADD REVIEW');
  console.log('REQ BODY: ', req.body);

  try {
    const { user_id, product_id, rating, review } =
      req.body as AddReviewRequest;
    // CREATE NEW REVIEW

    const productReview = new ProductReview(
      ObjectId.createFromHexString(user_id),
      ObjectId.createFromHexString(product_id),
      parseInt(rating),
      review
    );

    //  PUSH TO DATABASE
    const reviewSaveResult = await productReview.pushToDatabase();
    console.log(reviewSaveResult);

    console.log('[+] REVIEW CREATED SUCCESSFULLY...');
    res.json({ message: '[+] REVIEW POSTED SUCCESSFULLY...' });
  } catch (error) {
    console.log('[-] COULD NOT POST THE REVIEW...');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT POST THE REVIEW...' });
  }

  endSection();
}
