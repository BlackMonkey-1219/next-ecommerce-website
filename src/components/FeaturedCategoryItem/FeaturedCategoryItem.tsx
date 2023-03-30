import Image from 'next/image';
import React from 'react';

function FeaturedCategoryItem() {
  return (
    <div
      className={
        'aspect-[3/1] w-[15rem] h-auto p-[0.25rem] flex flex-row items-stretch justify-start border-[1px]'
      }>
      <div className={'flex-[3] basis-[75%]'}>
        <p className={'m-0'}>Item Name</p>
        <small className={'m-0'}>From $$$</small>
      </div>
      <div
        className={'relative flex-[1] basis-[25%] aspect-[1/1] w-[40%] h-auto'}>
        <Image
          src={''}
          alt={''}
          fill={true}
        />
      </div>
    </div>
  );
}

export default FeaturedCategoryItem;
