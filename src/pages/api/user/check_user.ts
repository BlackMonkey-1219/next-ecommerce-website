import User from '@/models/User';
import startSection, { endSection } from '@/utility/logToTerminal';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('CHECK USER');
  console.log('REQ BODY: ', req.body);
  endSection();
  try {
    const { user_email } = req.body;

    const user = await User.findByEmail(user_email);
    if (user) {
      res.json({
        message: '[+] USER EXISTS IN THE DATABASE...',
        data: { result: 1 },
      });
    } else {
      res.json({
        message: '[+] USER DOES NOT EXISTS IN THE DATABASE...',
        data: { result: 0 },
      });
    }
  } catch (error) {
    console.log('[-] COULD NOT CHECK USER EXISTACE...');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT CHECK USER EXISTANCE...' });
  }
  endSection();
}
