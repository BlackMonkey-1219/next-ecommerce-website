import Cart from '@/models/Cart';
import startSection, { endSection } from '@/utility/logToTerminal';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  startSection('UPDATE CART');
  console.log('REQ BODY: ', req.body);

  try {
    const { user_id, cart_items } = req.body as {
      user_id: string;
      cart_items: Array<{ product_id: string; product_count: number }>;
    };

    const cart = await Cart.findByCartOwnerId(
      ObjectId.createFromHexString(user_id)
    );

    if (cart) {
      // UPDATE CART
      const sentCartItems = cart_items.map((cartItem) => {
        return {
          productId: ObjectId.createFromHexString(cartItem.product_id),
          productCount: cartItem.product_count,
        };
      });
      cart.CartItems = sentCartItems;

      // SET USER CART
      const cartUpdateResult = await cart.saveChanges();
      console.log(cartUpdateResult);

      res.json({ message: '[+] CART UPDATED SUCCESSFULLY...' });
      console.log('[+] CART UPDATED SUCCESSFULLY...');
    } else {
      throw new Error(`[-] COULD NOT FIND THE USER WITH ID: ${user_id}`);
    }
  } catch (error) {
    console.log('[-] COULD NOT UPDATE CART...');
    console.log(error, '\n');
    res.json({ message: '[-] COULD NOT UPDATE CART...' });
  }

  endSection();
}
