import React from 'react';
import {
  FaCcApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
  FaCcVisa,
} from 'react-icons/fa';

function CartSummaryPanel() {
  return (
    <form
      action=''
      className={'w-full h-fit p-[1rem] bg-white rounded-md'}>
      <table className={'w-full h-fit border-[2px]'}>
        <tr>
          <th
            scope={'row'}
            className={'text-left text-lg align-middle'}>
            <label htmlFor='subtotal_input'>Subtotal: </label>
          </th>
          <td className={'text-right font-semibold'}>
            $
            <input
              type='number'
              name='subtotal'
              id='subtotal_input'
              disabled={true}
              value={3879.19}
              className={'w-[10ch] h-fit text-right bg-transparent'}
            />
          </td>
        </tr>
        <tr>
          <th
            scope={'row'}
            className={'text-left text-lg align-middle'}>
            <label htmlFor='discount_input'>Discount: </label>
          </th>
          <td className={'text-right font-semibold'}>
            $
            <input
              type='number'
              name='discount'
              id='discount_input'
              disabled={true}
              value={3879.19}
              className={'w-[10ch] h-fit text-right bg-transparent'}
            />
          </td>
        </tr>
        <tr className={'border-b-[2px]'}>
          <th
            scope={'row'}
            className={'text-left text-lg align-middle'}>
            <label htmlFor='tax_input'>Tax: </label>
          </th>
          <td className={'text-right font-semibold'}>
            $
            <input
              type='number'
              name='tax'
              id='tax_input'
              disabled={true}
              value={3879.19}
              className={'w-[10ch] h-fit text-right bg-transparent'}
            />
          </td>
        </tr>
        <tr>
          <th
            scope={'row'}
            className={'text-left text-lg align-middle'}>
            <label htmlFor='total_input'>Total: </label>
          </th>
          <td className={'text-right font-semibold'}>
            $
            <input
              type='number'
              name='total'
              id='total_input'
              disabled={true}
              value={3879.19}
              className={'w-[10ch] h-fit text-right bg-transparent'}
            />
          </td>
        </tr>
      </table>
      <button
        className={
          'w-full h-fit px-[0.5rem] py-[0.75rem] mt-[0.5rem] bg-gradient-to-b from-emerald-400 to-emerald-700 text-white rounded-md'
        }>
        Checkout
      </button>
      <div
        className={
          'w-full h-fit mt-[0.5rem] flex flex-row items-center justify-between'
        }>
        <FaCcVisa size={'2.5rem'} />
        <FaCcMastercard size={'2.5rem'} />
        <FaCcPaypal size={'2.5rem'} />
        <FaCcApplePay size={'2.5rem'} />
        <FaCcStripe size={'2.5rem'} />
      </div>
    </form>
  );
}

export default CartSummaryPanel;
