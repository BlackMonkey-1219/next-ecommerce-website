import React, { useState } from 'react';
import ProductDescription from '../ProductDescription/ProductDescription';
import ProductReviewSlider from '../ProductReviewSlider/ProductReviewSlider';
import Image from 'next/image';
import ProductSellerDetails from '../ProductSellerDetails/ProductSellerDetails';
import ProductContactSellerForm from '../ProductContactSellerForm/ProductContactSellerForm';

function ProductDetailsPanel() {
  const [openedPanel, setOpenedPanel] = useState(1);

  function changePanel(panelIndex: number) {
    setOpenedPanel(panelIndex);
  }

  return (
    <div className={'flex-3 shrink-0 basis-[70%] rounded-md overflow-hidden'}>
      <div
        className={
          'w-full h-fit px-[1rem] py-[0.75rem] flex flex-row items-center justify-start gap-[1rem] bg-white border-b-[2px]'
        }>
        <button
          onClick={(e) => {
            e.preventDefault();
            changePanel(1);
          }}
          className={
            'w-[10rem] h-fit px-[1rem] py-[0.75rem] border-clr-primary hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded-md'
          }>
          Description
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            changePanel(2);
          }}
          className={
            'w-[10rem] h-fit px-[1rem] py-[0.75rem] border-clr-primary hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded-md'
          }>
          Reviews
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            changePanel(3);
          }}
          className={
            'w-[10rem] h-fit px-[1rem] py-[0.75rem] border-clr-primary hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded-md'
          }>
          Seller
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            changePanel(4);
          }}
          className={
            'w-[10rem] h-fit px-[1rem] py-[0.75rem] border-clr-primary hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded-md'
          }>
          Contact Seller
        </button>
      </div>
      <div>
        {/* 1 */}
        <div
          className={`${
            openedPanel == 1 ? 'block' : 'hidden'
          } w-full h-fit p-[1rem] bg-white`}>
          <ProductDescription />
        </div>
        {/* 2 */}
        <div
          className={`${
            openedPanel == 2 ? 'block' : 'hidden'
          } w-full h-fit p-[1rem] overflow-y-auto snap-y snap-mandatory bg-white`}>
          <ProductReviewSlider />
        </div>
        {/* 3 */}
        <div
          className={`${
            openedPanel == 3 ? 'block' : 'hidden'
          } w-full h-fit p-[1rem] bg-white`}>
          <ProductSellerDetails />
        </div>
        {/* 4 */}
        <div
          className={`${
            openedPanel == 4 ? 'block' : 'hidden'
          } w-full h-fit p-[1rem] bg-white`}>
          <ProductContactSellerForm />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPanel;
