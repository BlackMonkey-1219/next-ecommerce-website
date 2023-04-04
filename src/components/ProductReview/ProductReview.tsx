import Image from 'next/image';
import React from 'react';

function ProductReview() {
  return (
    <table
      border={2}
      className={
        'w-full h-fit p-[1rem] border-[2px] border-clr-primary/20 bg-white rounded-md'
      }>
      <thead className={'border-b-[2px]'}>
        <tr>
          <th className={'flex flex-row gap-[0.5rem]'}>
            <div
              className={
                'relative aspect-[1/1] w-[5rem] h-auto rounded-full overflow-hidden'
              }>
              <Image
                src={''}
                alt={''}
                fill={true}
              />
            </div>
            <div>
              <p className={'mb-[0.25rem]'}>User Name</p>
              <small>{new Date('1999-12-19').toLocaleDateString()}</small>
            </div>
          </th>
          <th className={'text-center text-xl'}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              quisquam expedita quam? Eveniet, facilis consectetur?
            </p>
          </th>
        </tr>
      </thead>
      <tbody className={'text-xl'}>
        <tr>
          <th className={'text-center text-lg'}>Buyer Review</th>
          <td>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            magnam rerum incidunt, quasi minima, tempore officiis quidem cum
            sapiente quod fugit suscipit. In ratione omnis est velit ipsa porro
            ducimus.
          </td>
        </tr>
        <tr>
          <th
            scope={'row'}
            className={'text-center text-lg'}>
            Seller Reply
          </th>
          <td colSpan={2}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            consequatur magni optio maxime, quasi nihil voluptas facilis dolor
            unde suscipit deleniti ipsam iure minus aliquam totam sunt
            reprehenderit rerum corporis.
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProductReview;
