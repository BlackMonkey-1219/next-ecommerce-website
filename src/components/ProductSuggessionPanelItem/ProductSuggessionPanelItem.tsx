import Image from 'next/image';
import React from 'react';

function ProductSuggessionPanelItem() {
  return (
    <div
      className={
        'w-full h-fit p-[0.5rem] flex flex-row items-center justify-start gap-[0.5rem] bg-white border-[2px] rounded-md'
      }>
      <div
        className={
          'flex-1 basis-[30%] shrink-0 grow-0 relative aspect-[1/1] w-[5rem] h-auto'
        }>
        <Image
          src={''}
          alt={''}
          fill={true}
          className={'aspect-[1/1] w-full h-auto'}
        />
      </div>
      <div className={'flex-3 basis-[70%] shrink-0 grow-0 w-full h-fit'}>
        <p className={'m-0'}>Product Name</p>
        <p className={'m-0'}>Varient</p>
        <small>Price - Price</small>
      </div>
    </div>
  );
}

export default ProductSuggessionPanelItem;
