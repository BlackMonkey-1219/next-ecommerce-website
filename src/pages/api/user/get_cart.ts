import Cart from '@/models/Cart';
import { GetCartRequest } from '@/types/user_route.types';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('GET CART');
  console.log('REQ BODY: ', req.body);

  try {
    const { user_id } = req.body as GetCartRequest;

    // FETCH CART
    const cart = Cart.findByCartOwnerId(ObjectId.createFromHexString(user_id));

    if (cart) {
      // SEND CART
      res.json({
        message: '[+] CART FETCHED SUCCESSFULLY...',
        data: { user_cart: cart },
      });
      console.log('[+] CART FETCHED SUCCESSFULLY...');
    } else {
      // CREATE NEW CART
      console.log('[+] CREATING A NEW CART FOR THE NEW USER...');
      const newCart = new Cart(ObjectId.createFromHexString(user_id));
      const cartSaveResult = newCart.pushToDatabase();
      console.log(cartSaveResult);

      // SEND NEW CART
      res.json({
        message: '[+] CART CREATED FOR THE NEW USER...',
        data: { user_cart: newCart },
      });
    }
  } catch (error) {
    console.log('[-] COULD NOT FETCH THE CART...');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT FETCH YOUR CART...' });
  }

  endSection();
}
