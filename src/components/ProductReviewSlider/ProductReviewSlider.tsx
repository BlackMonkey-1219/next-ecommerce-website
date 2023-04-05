import React from 'react';
import ProductReview from '../ProductReview/ProductReview';

function ProductReviewSlider() {
  return (
    <ul
      className={
        'w-full h-fit flex flex-col items-start justify-start gap-[2rem] bg-white rounded-md'
      }>
      <li className={'snap-center'}>
        <ProductReview />
      </li>
      <li className={'snap-center'}>
        <ProductReview />
      </li>
      <li className={'snap-center'}>
        <ProductReview />
      </li>
      <li className={'snap-center'}>
        <ProductReview />
      </li>
      <li className={'snap-center'}>
        <ProductReview />
      </li>
    </ul>
  );
}

export default ProductReviewSlider;
