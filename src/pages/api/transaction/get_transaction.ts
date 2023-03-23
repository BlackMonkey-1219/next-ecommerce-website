import TransactionRecord from '@/models/TransactionRecord';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('GET TRANSACTIONS');
  console.log('REQ BODY: ', req.body);

  try {
    const { user_id, shop_id, created_date } = req.body;

    if (user_id) {
      // GET ALL TRANSACTIONS WITH USER ID
      const transactions = await TransactionRecord.findByUserId(
        ObjectId.createFromHexString(user_id)
      );
      if (transactions) {
        console.log(transactions);
        res.json({
          message: '[+] TRANSACTION RECORDS FETCHED SUCCESSFULLY...',
          data: { transaction_records: transactions },
        });
      } else {
        console.log(transactions);
        res.json({
          message: '[+] TRANSACTION RECORDS FETCHED SUCCESSFULLY...',
          data: { transaction_records: [] },
        });
      }
    } else if (shop_id) {
      // GET ALL THE TRANSACTIONS WITH SHOP ID

      const transactions = await TransactionRecord.findByShopId(
        ObjectId.createFromHexString(shop_id)
      );
      if (transactions) {
        console.log(transactions);
        res.json({
          message: '[+] TRANSACTION RECORDS FETCHED SUCCESSFULLY...',
          data: { transaction_records: transactions },
        });
      } else {
        console.log(transactions);
        res.json({
          message: '[+] TRANSACTION RECORDS FETCHED SUCCESSFULLY...',
          data: { transaction_records: [] },
        });
      }
    } else if (created_date) {
      // GET ALL THE TRANSACTIONS ON THIS DAY
      const transactions = await TransactionRecord.findByCreatedDate(
        parseInt(created_date)
      );
      if (transactions) {
        console.log(transactions);
        res.json({
          message: '[+] TRANSACTION RECORDS FETCHED SUCCESSFULLY...',
          data: { transaction_records: transactions },
        });
      } else {
        console.log(transactions);
        res.json({
          message: '[+] TRANSACTION RECORDS FETCHED SUCCESSFULLY...',
          data: { transaction_records: [] },
        });
      }
    } else {
      throw new Error('[-] INVALID REQUEST...');
    }
  } catch (error) {
    console.log('[-] COULD NOT FETCH TRANSACTIONS...');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT FETCH TRANSACTIONS...' });
  }

  endSection();
}
