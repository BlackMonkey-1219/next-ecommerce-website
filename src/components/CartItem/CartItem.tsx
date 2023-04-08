import Image from 'next/image';
import React from 'react';
import Button from '../Button/Button';

function CartItem() {
  return (
    <table className={'w-full h-fit bg-white border-[2px]'}>
      <tr>
        <td className={'w-[10rem]'}>
          <div className={'relative aspect-[1/1] w-[10rem] h-auto'}>
            <Image
              src={''}
              alt={''}
              fill={true}
            />
          </div>
        </td>
        <td className={'w-auto align-top'}>
          <b>Product Title Goes Here</b>
          <ul>
            <li>Size:-----</li>
            <li>Color:-----</li>
            <li>Material:-----</li>
            <li>Brand:-----</li>
          </ul>
        </td>
        <td className={'w-[10rem] align-top text-center'}>
          <strong className={'text-xl'}>$99.78</strong>
          <br />
          <label htmlFor='product_count_input'>X </label>
          <input
            type='number'
            name='product_count'
            id='product_count_input'
            max={100}
            min={1}
            defaultValue={1}
            className={
              'w-[4rem] h-fit px-[0.25rem] py-[0.125rem] text-right border-[2px] rounded-md'
            }
          />
          <hr />
          <label htmlFor=''>${99.78 * 15}</label>
          <hr />
        </td>
      </tr>
      <tr>
        <td colSpan={3}>
          <Button
            type={'secondary'}
            width={'full'}
            height={'fit'}>
            REMOVE
          </Button>
        </td>
      </tr>
    </table>
  );
}

export default CartItem;
