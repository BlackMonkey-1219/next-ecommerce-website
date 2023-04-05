import React from 'react';
import ProductRelatedItem from '../ProductRelatedItem/ProductRelatedItem';

function ProductRelatedItemsSection() {
  return (
    <>
      <h2>Related Items</h2>
      <ul
        className={
          'w-fit h-fit flex flex-row items-center justify-start gap-[0.5rem] rounded-md'
        }>
        <li>
          <ProductRelatedItem />
        </li>
        <li>
          <ProductRelatedItem />
        </li>
        <li>
          <ProductRelatedItem />
        </li>
        <li>
          <ProductRelatedItem />
        </li>
        <li>
          <ProductRelatedItem />
        </li>
        <li>
          <ProductRelatedItem />
        </li>
        <li>
          <ProductRelatedItem />
        </li>
        <li>
          <ProductRelatedItem />
        </li>
        <li>
          <ProductRelatedItem />
        </li>
        <li>
          <ProductRelatedItem />
        </li>
      </ul>
    </>
  );
}

export default ProductRelatedItemsSection;
