import User from '@/models/User';
import { UpdateUserRequest } from '@/types/user_route.types';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('UPDATE USER PROFILE');
  console.log('REQ BODY: ', req.body);

  try {
    const {
      user_id,
      user_first_name,
      user_last_name,
      user_age,
      user_email,
      user_contact_number,
      user_country,
      user_state,
      user_city,
      user_address,
      user_postal_code,
    } = req.body as UpdateUserRequest;

    // GET PROFILE
    const user = await User.findById(ObjectId.createFromHexString(user_id));

    if (user) {
      // UPDATE PROFILE
      user.FirstName = user_first_name;
      user.LastName = user_last_name;
      user.Age = parseInt(user_age);
      user.Email = user_email;
      user.Contact = user_contact_number;
      user.Country = user_country;
      user.State = user_state;
      user.City = user_city;
      user.Address = user_address;
      user.PostalCode = user_postal_code;

      // SAVE CHANGES
      const userProfileUpdateResult = await user.saveChanges();
      console.log(userProfileUpdateResult);
      res.json({ message: '[+] PROFILE UPDATED SUCCESSFULLY...' });
    } else {
      throw new Error(`[-] COULD NOT FIND THE USER WITH ID: ${user_id}`);
    }
  } catch (error) {
    console.log('[-] COULD NOT UPDATE USER PROFILE...');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT UPDATE YOUR PROFILE...' });
  }

  endSection();
}
