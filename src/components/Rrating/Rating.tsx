import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const starSize = '1rem';

const stars = [
  <>
    <AiFillStar size={starSize} />
    <AiOutlineStar size={starSize} />
    <AiOutlineStar size={starSize} />
    <AiOutlineStar size={starSize} />
    <AiOutlineStar size={starSize} />
  </>,
  <>
    <AiFillStar size={starSize} />
    <AiFillStar size={starSize} />
    <AiOutlineStar size={starSize} />
    <AiOutlineStar size={starSize} />
    <AiOutlineStar size={starSize} />
  </>,
  <>
    <AiFillStar size={starSize} />
    <AiFillStar size={starSize} />
    <AiFillStar size={starSize} />
    <AiOutlineStar size={starSize} />
    <AiOutlineStar size={starSize} />
  </>,
  <>
    <AiFillStar size={starSize} />
    <AiFillStar size={starSize} />
    <AiFillStar size={starSize} />
    <AiFillStar size={starSize} />
    <AiOutlineStar size={starSize} />
  </>,
  <>
    <AiFillStar size={starSize} />
    <AiFillStar size={starSize} />
    <AiFillStar size={starSize} />
    <AiFillStar size={starSize} />
    <AiFillStar size={starSize} />
  </>,
];

interface iRating {
  rating: 1 | 2 | 3 | 4 | 5;
}

function Rating({ rating = 5 }: iRating) {
  return (
    <div className={'flex flex-row items-center justify-start gap-[0.5rem]'}>
      <span className={'flex flex-row items-center justify-start'}>
        {stars[rating - 1]}
      </span>
      <span>{rating}</span>
    </div>
  );
}

export default Rating;
