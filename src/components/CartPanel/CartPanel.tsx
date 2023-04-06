import React from 'react';
import CartItem from '../CartItem/CartItem';

function CartPanel() {
  return (
    <ul
      className={
        'w-full h-fit p-[1rem] flex flex-col items-start justify-start gap-[0.5rem] rounded-md bg-white'
      }>
      <li className={'w-full h-fit'}>
        <CartItem />
      </li>
      <li className={'w-full h-fit'}>
        <CartItem />
      </li>
      <li className={'w-full h-fit'}>
        <CartItem />
      </li>
    </ul>
  );
}

export default CartPanel;
