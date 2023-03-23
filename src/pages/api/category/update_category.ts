import Category from '@/models/Category';
import { UpdateCategoryRequest } from '@/types/category_route_types';
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
    const { category_id, category_name } = req.body as UpdateCategoryRequest;

    // REMOVE BY ID
    const category = await Category.findById(
      ObjectId.createFromHexString(category_id)
    );

    if (category) {
      category.CategoryName = category_name;
      const updateResult = await category.saveChanges();
      console.log(updateResult);
    } else {
      throw new Error(`[-] COULD NOT FIND CATEGORY WITH ID: ${category_id}`);
    }

    console.log('[+] CATEGORY REMOVED SUCCESSFULLY...');
    res.json({ message: '[+] CATEGORY REMOVED SUCCESSFULLY...' });
  } catch (error) {
    console.log('[-] COULD NOT ADD NEW CATEGORY...');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT ADD NEW CATEGORY...' });
  }

  endSection();
}
