import ProductReview from '@/models/ProductReview';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('GET REVIEW');
  console.log('REQ BODY: ', req.body);

  try {
    const { user_id, product_id, review_id, rating } = req.body;
    if (user_id) {
      // FIND BY USER ID
      const productReviews = await ProductReview.findByUserId(
        ObjectId.createFromHexString(user_id)
      );
      res.json({
        message: '[+] REVIEW(S) FETCHED SUCCESSFULLY...',
        data: { reviews: productReviews },
      });
    } else if (product_id) {
      // FIND BY PRODUCT ID
      const productReviews = await ProductReview.findByProductId(
        ObjectId.createFromHexString(product_id)
      );
      res.json({
        message: '[+] REVIEW(S) FETCHED SUCCESSFULLY...',
        data: { reviews: productReviews },
      });
    } else if (review_id) {
      // FIND BY REVIEW ID
      const productReviews = await ProductReview.findById(
        ObjectId.createFromHexString(review_id)
      );
      res.json({
        message: '[+] REVIEW(S) FETCHED SUCCESSFULLY...',
        data: { reviews: productReviews },
      });
    } else if (rating) {
      // FIND BY RATING
      const productReviews = await ProductReview.findByRating(parseInt(rating));
      res.json({
        message: '[+] REVIEW(S) FETCHED SUCCESSFULLY...',
        data: { reviews: productReviews },
      });
    } else {
      throw new Error('[-] INVALID REQUEST...');
    }
    console.log('[+] REVIEW(S) FETCHED SUCCESSFULLY...');
  } catch (error) {
    console.log('[-] COULD NOT FETCH THE REVIEW(S)...');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT FETCH THE REVIEW(S)...' });
  }

  endSection();
}
