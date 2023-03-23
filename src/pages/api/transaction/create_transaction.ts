import TransactionRecord from '@/models/TransactionRecord';
import { CreateTransactionRequest } from '@/types/transaction_route_types';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('CREATE TRANSACTION');
  console.log('REQ BODY: ', req.body);

  try {
    const { user_id, shop_id, products } = req.body as CreateTransactionRequest;

    const convertedProducts = products.map((product) => {
      return {
        productId: ObjectId.createFromHexString(product.product_id),
        productCount: parseInt(product.product_count),
      };
    });

    // CREATE NEW TRANSACTION
    const transactionRecord = new TransactionRecord(
      ObjectId.createFromHexString(user_id),
      ObjectId.createFromHexString(shop_id),
      convertedProducts
    );

    // SAVE TO DATABASE
    const recordSaveResult = await transactionRecord.pushToDatabase();
    console.log(recordSaveResult);

    console.log('[+] TRANSACTION RECORD CREATED SUCCESSFULLY...');
    res.json({ message: '[+] TRANSACTION RECORD CREATED SUCCESSFULLY...' });
  } catch (error) {
    console.log('[-] COULD NOT CREATE TRANSACTION...');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT CREATE TRANSACTION...' });
  }

  endSection();
}
