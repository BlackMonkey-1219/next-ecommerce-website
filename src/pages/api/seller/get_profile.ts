import Seller from '@/models/Seller';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('GET SELLER PROFILE');
  console.log('REQ BODY: ', req.body);

  try {
    const { seller_id } = req.body;

    // FIND SELLER PROFILE
    const seller = await Seller.findById(
      ObjectId.createFromHexString(seller_id)
    );

    if (seller) {
      res.json({
        message: '[+] FETCHED PROFILE SUCCESSFULLY...',
        data: { seller_profile: seller },
      });
    } else {
      throw new Error(`[-] COULD NOT FIND THE SELLER WITH ID: ${seller_id}`);
    }

    // SEND PROFILE DETAILS
    console.log('[+] SELLER PROFILE FETCHED SUCCESSFULLY...');
  } catch (error) {
    console.log('[-] COULD NOT FETCH SELLER PROFILE...');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT FETCH PROFILE...' });
  }

  endSection();
}
