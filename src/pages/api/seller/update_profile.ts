import Seller from '@/models/Seller';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('UPDATE SELLER PROFILE');
  console.log('REQ BODY', req.body);
  const {
    seller_id,
    seller_first_name,
    seller_last_name,
    seller_age,
    seller_nic,
    seller_email,
    seller_contact_number,
    seller_country,
    seller_state,
    seller_city,
    seller_postal_code,
    seller_address,
    seller_shop_id,
    seller_products,
  } = req.body;

  try {
    // GET SELLER PROFILE
    const seller = await Seller.findById(
      ObjectId.createFromHexString(seller_id)
    );

    // UPDATE DATA
    seller!.FirstName = seller_first_name;
    seller!.LastName = seller_last_name;
    seller!.Age = seller_age;
    seller!.Email = seller_email;
    seller!.Contact = seller_contact_number;
    seller!.NIC = seller_nic;
    seller!.Country = seller_country;
    seller!.State = seller_state;
    seller!.City = seller_city;
    seller!.Address = seller_address;
    seller!.PostalCode = seller_postal_code;
    seller!.ShopID = seller_shop_id;
    seller!.Products = seller_products;

    // SAVE CHANGES TO DATABASE
    const updateResult = await seller!.saveChanges();
    console.log(updateResult);

    res.json({ message: '[+] SELLER PROFILE UPDATED SUCCESSFULLY...' });
  } catch (error) {
    console.log('[-] COULD NOT UPDATE SELLER PROFILE...');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT UPDATE SELLER PROFILE...' });
  }

  endSection();
}
