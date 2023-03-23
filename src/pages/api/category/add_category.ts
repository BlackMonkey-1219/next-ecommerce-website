import Category from '@/models/Category';
import { AddCategoryRequest } from '@/types/category_route_types';
import startSection, { endSection } from '@/utility/logToTerminal';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('CREATE CATEGORY');
  console.log('REQ BODY: ', req.body);

  try {
    const { category_name } = req.body as AddCategoryRequest;

    // CREATE NEW CATEGORY
    const newCategory = new Category(category_name);

    // PUSH TO DATABASE
    const saveResult = await newCategory.pushToDatabase();
    console.log(saveResult);

    console.log('[+] NEW CATEGORY CREATED SUCCESSFULLY...');
    res.json({ message: '[+] NEW CATEGORY CREATED SUCCESSFULLY...' });
  } catch (error) {
    console.log('[-] COULD NOT ADD NEW CATEGORY...');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT ADD NEW CATEGORY...' });
  }

  endSection();
}
