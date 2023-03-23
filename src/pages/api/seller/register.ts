import Seller from '@/models/Seller';
import { DataSellerCreate } from '@/types/seller_route_types';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('CREATE SELLER');
  console.log('REQ BODY: ', req.body);
  const {
    user_id,
    user_first_name,
    user_last_name,
    user_age,
    user_email,
    user_contact_number,
    seller_nic,
    user_country,
    user_state,
    user_city,
    user_address,
    user_postal_code,
  } = req.body as DataSellerCreate;

  try {
    // CREATE NEW SELLER
    const seller = new Seller(
      user_first_name,
      user_last_name,
      user_age,
      user_email,
      user_contact_number,
      user_country,
      user_state,
      user_city,
      user_postal_code,
      user_address,
      new ObjectId(), // USER ID
      seller_nic,
      []
    );

    // PUSH SELLER TO THE DATABASE
    const sellerPushResult = await seller.pushToDataBase();
    console.log(sellerPushResult);

    res.json({ message: '[+] SELLER PROFILE CREATED SUCCESSFULLY...' });
  } catch (error) {
    console.log('[-] FAILED TO CREATE SELLER PROFILE...');
    console.log(error, '\n');
    res.json({ message: '[-] FAILED TO CREATE SELLER PROFILE...' });
  }
  endSection();
}
