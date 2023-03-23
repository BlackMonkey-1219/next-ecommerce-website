import User from '@/models/User';
import { RemoveUserRequest } from '@/types/user_route.types';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('REMOVE USER');
  console.log('REQ BODY: ', req.body);

  try {
    const { user_id } = req.body as RemoveUserRequest;

    // REMOVE USER BY ID;
    const userRemoveResult = await User.deleteById(
      ObjectId.createFromHexString(user_id)
    );
    console.log(userRemoveResult);

    res.json({ message: '[+] PROFILE REMOVED SUCCESSFULLY...' });
    console.log(`[+] USER PRFILE REMOVE SUCCESSFULLY: ${user_id}`);
  } catch (error) {
    console.log('[-] COULD NOT REMOVE USER PROFILE...');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT REMOVE YOUR PROFILE...' });
  }

  endSection();
}
