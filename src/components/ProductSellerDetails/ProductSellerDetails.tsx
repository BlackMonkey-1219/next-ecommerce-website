import Image from 'next/image';
import React from 'react';

function ProductSellerDetails() {
  return (
    <div className={'w-full h-fit flex flex-row gap-[1rem] flex-wrap bg-white'}>
      <div
        className={
          'grow-1 shrink-1 basis-[35%] relative aspect-[1/1] w-[20rem]'
        }>
        <Image
          src={''}
          alt={''}
          fill={true}
          className={'rounded-md bg-white'}
        />
      </div>
      <p className={'grow-1 shrink-1 basis-[60%] w-full h-fit'}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolore
        eveniet accusantium! Ipsa delectus illum debitis asperiores, dolore,
        reprehenderit placeat libero molestias vel laborum nobis aspernatur?
        Tenetur nihil quam obcaecati quibusdam recusandae totam laudantium,
        pariatur soluta, odit assumenda at velit optio dicta debitis ipsa quasi
        rem laborum distinctio repellendus vitae?
      </p>
    </div>
  );
}

export default ProductSellerDetails;
