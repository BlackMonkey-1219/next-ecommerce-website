import Image from 'next/image';
import React from 'react';
import Avatar from '../Avatar/Avatar';

function ProductReview() {
  return (
    <table className={'w-full h-fit p-[1rem] bg-white rounded-md'}>
      <thead className={'border-[2px]'}>
        <tr>
          <td className={'min-w-[12rem]'}>
            <div className={'w-full h-fit flex flex-row gap-[1rem]'}>
              <Avatar size={'md'} />
              <div
                className={
                  'flex flex-col items-start justify-start gap-[0.125rem]'
                }>
                <p className={'m-0 whitespace-nowrap'}>User Name</p>
                <small>{new Date('1999-12-19').toLocaleDateString()}</small>
              </div>
            </div>
          </td>
          <td colSpan={2}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              quisquam expedita quam? Eveniet, facilis consectetur?
            </p>
          </td>
        </tr>
      </thead>
      <tbody className={'mt-[1rem] border-[2px]'}>
        <tr>
          <th scope={'row'}>Buyer Review</th>
          <td colSpan={2}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            magnam rerum incidunt, quasi minima, tempore officiis quidem cum
            sapiente quod fugit suscipit. In ratione omnis est velit ipsa porro
            ducimus.
          </td>
        </tr>
        <tr>
          <th scope={'row'}>Seller Reply</th>
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
