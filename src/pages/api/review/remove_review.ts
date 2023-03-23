import ProductReview from '@/models/ProductReview';
import { RemoveReviewRequest } from '@/types/review_route_types';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('REMOVE REVIEW');
  console.log('REQ BODY: ', req.body);

  try {
    const { review_id } = req.body as RemoveReviewRequest;

    // REMOVE REIVEW BY ID
    const reviewRemoveResult = await ProductReview.deleteById(
      ObjectId.createFromHexString(review_id)
    );

    console.log(reviewRemoveResult);
    console.log('[+] REVIEW REMOVED SUCCESSFULLY...');
    res.json({ message: '[+] REVIEW REMOVED SUCCESSFULLY...' });
  } catch (error) {
    console.log('[-] COULD NOT REMOVE THE REVIEW...');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT REMOVE THE REVIEW...' });
  }

  endSection();
}
