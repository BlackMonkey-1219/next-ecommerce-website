import Image from 'next/image';
import React from 'react';
import Rating from '../Rrating/Rating';

function ProductRelatedItem() {
  return (
    <div
      className={
        'aspect-[1/1.5] w-[15rem] h-auto p-[0.5rem] border-[2px] rounded-md bg-white'
      }>
      <div className={'relative aspect-[1/1] w-full h-auto mb-[0.25rem]'}>
        <Image
          src={''}
          alt={''}
          fill={true}
        />
      </div>
      <p className={'m-0 text-lg'}>Product Title Goes Here.</p>
      <p>
        <span>$$.$$</span> - <span>$$.$$</span>
      </p>
      <div
        className={'w-full h-fit flex flex-row items-center justify-between'}>
        <Rating rating={3} />
        <span>129 orders</span>
      </div>
    </div>
  );
}

export default ProductRelatedItem;
