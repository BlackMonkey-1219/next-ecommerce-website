import Category from '@/models/Category';
import { RemoveCategoryRequest } from '@/types/category_route_types';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('CREATE CATEGORY');
  console.log('REQ BODY: ', req.body);

  try {
    const { category_id } = req.body as RemoveCategoryRequest;

    // REMOVE BY ID
    const removeResult = await Category.deleteById(
      ObjectId.createFromHexString(category_id)
    );

    console.log(removeResult);

    console.log('[+] CATEGORY REMOVED SUCCESSFULLY...');
    res.json({ message: '[+] CATEGORY REMOVED SUCCESSFULLY...' });
  } catch (error) {
    console.log('[-] COULD NOT ADD NEW CATEGORY...');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT ADD NEW CATEGORY...' });
  }

  endSection();
}
