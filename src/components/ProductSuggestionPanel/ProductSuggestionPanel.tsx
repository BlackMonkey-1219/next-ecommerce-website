import Image from 'next/image';
import React from 'react';
import ProductSuggessionPanelItem from '../ProductSuggessionPanelItem/ProductSuggessionPanelItem';

function ProductSuggestionPanel() {
  return (
    <ul
      className={
        'flex-1 shrink-0 basis-[25%] w-full h-fit p-[0.5rem] flex flex-col items-center justify-start gap-[1rem] bg-white rounded-md'
      }>
      <li className={'w-full'}>
        <ProductSuggessionPanelItem />
      </li>
      <li className={'w-full'}>
        <ProductSuggessionPanelItem />
      </li>
      <li className={'w-full'}>
        <ProductSuggessionPanelItem />
      </li>
      <li className={'w-full'}>
        <ProductSuggessionPanelItem />
      </li>
      <li className={'w-full'}>
        <ProductSuggessionPanelItem />
      </li>
    </ul>
  );
}

export default ProductSuggestionPanel;
