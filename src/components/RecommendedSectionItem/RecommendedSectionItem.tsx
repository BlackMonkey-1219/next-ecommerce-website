import Image from 'next/image';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

function RecommendedSectionItem() {
  return (
    <div className={'aspect-[1/1.5] w-full h-auto p-[0.25rem] bg-white'}>
      <div className={'relative aspect-[1/1] w-full h-auto mb-[0.5rem]'}>
        <Image
          src={''}
          alt={''}
          fill={true}
        />
      </div>
      <b className={'text-xl'}>$00.00</b>
      <br />
      <p>Category</p>
      <div>
        <span
          className={'flex flex-row items-center justify-start gap-[0.25rem]'}>
          <AiFillStar />
          <b>4.8</b>
        </span>
      </div>
    </div>
  );
}

export default RecommendedSectionItem;
