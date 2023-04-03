import Image from 'next/image';
import React from 'react';
import Rating from '../Rrating/Rating';
import Link from 'next/link';

function SearchResult() {
  return (
    <div
      className={
        'w-full h-[16rem]  flex flex-row items-center justify-start gap-[0.5rem] bg-white rounded-md'
      }>
      <div className={'relative aspect-[1/1] w-auto h-full'}>
        <Image
          src={''}
          alt={''}
          fill={true}
        />
      </div>
      <div
        className={
          'w-full h-fit p-[0.5rem] flex flex-col items-start justify-start gap-[0.5rem]'
        }>
        <h6>This is the item title</h6>
        <strong>{'$998.90'}</strong>
        <div
          className={
            'flex flex-row items-center justify-start gap-[1rem] text-sm'
          }>
          <Rating rating={5} />
          <span>157 orders</span>
          <span>Free Shipping</span>
        </div>
        <p className={'w-full h-fit whitespace-normal'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa unde
          recusandae officiis. Facilis voluptatum corporis nisi rerum aliquam
          vel quia.
        </p>
        <Link href={''}>View details</Link>
      </div>
    </div>
  );
}

export default SearchResult;
