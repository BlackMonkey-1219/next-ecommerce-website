import Image from 'next/image';
import React from 'react';

function DealItemCard() {
  return (
    <div
      className={
        'aspect-[2/3] w-[10rem] h-auto p-[0.25rem] flex flex-col items-center justify-start gap-[0.25rem] border-[2px] bg-white shadow-md'
      }>
      <div className={'relative aspect-[1/1] w-full h-auto'}>
        <Image
          src={''}
          alt={''}
          fill={true}
        />
      </div>
      <p>Product Name</p>
      <span
        className={
          'w-fit h-fit px-[0.5rem] py-[0.25rem] bg-clr-primary/10 text-clr-primary rounded-full'
        }>
        -99%
      </span>
    </div>
  );
}

export default DealItemCard;
