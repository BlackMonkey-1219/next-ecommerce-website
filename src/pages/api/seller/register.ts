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
    id,
    first_name,
    last_name,
    age,
    email,
    contact_number,
    NIC,
    country,
    state,
    city,
    address,
    postal_code,
  } = req.body as DataSellerCreate;
  try {
    // CREATE NEW SELLER
    const seller = new Seller(
      first_name,
      last_name,
      age,
      email,
      contact_number,
      country,
      state,
      city,
      postal_code,
      address,
      new ObjectId(),
      NIC
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
