import User from '@/models/User';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('GET PROFILE');
  console.log('REQ BODY: ', req.body);

  try {
    const { user_id } = req.body;

    // GET PROFILE
    const user = await User.findById(ObjectId.createFromHexString(user_id));
    console.log(user);

    if (user) {
      res.json({
        message: '[+] PROFILE FETCHED SUCCESSFULLY...',
        data: { user_profile: user },
      });
      console.log('[+] PROFILE FETCHED SUCCESSFULLY...');
    } else {
      throw new Error(`[-] COULD NOT FIND THE USER WITH ID: ${user_id}`);
    }
  } catch (error) {
    console.log('[-] COULD NOT FETCH THE PROFILE DATA...');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT FETCH PROFILE DATA...' });
  }

  endSection();
}
