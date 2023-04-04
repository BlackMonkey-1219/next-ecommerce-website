import React, { useState } from 'react';
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai';

function RatingFilter() {
  const [open, setOpen] = useState(true);

  function collaspeController(e: React.MouseEvent) {
    e.preventDefault();
    setOpen((prevState) => !prevState);
  }

  return (
    <>
      <div
        className={'w-full h-fit flex flex-row items-center justify-between'}>
        <strong
          onClick={collaspeController}
          className={'block mt-[0.5rem] mb-[0.75rem] cursor-pointer'}>
          Category
        </strong>
        {open ? <AiFillCaretDown /> : <AiFillCaretUp />}
      </div>
      <ul
        className={` w-full ${
          open ? 'h-[10rem] p-[0.5rem]' : 'h-[0] p-[0]'
        } border-[1px] rounded-md overflow-y-auto transition-all duration-500`}>
        <li
          className={
            'w-full h-fit my-[0.25rem] flex flex-row items-center justify-start gap-[1rem]'
          }>
          <input
            type='checkbox'
            name='rating_5'
            id='rating_5_input'
          />
          <label
            htmlFor='rating_5_input'
            className={
              'w-full h-fit flex flex-row items-center justify-start gap-[0]'
            }>
            <AiFillStar fill={'#ffde0a'} />
            <AiFillStar fill={'#ffde0a'} />
            <AiFillStar fill={'#ffde0a'} />
            <AiFillStar fill={'#ffde0a'} />
            <AiFillStar fill={'#ffde0a'} />
          </label>
        </li>
        <li
          className={
            'w-full h-fit my-[0.25rem] flex flex-row items-center justify-start gap-[1rem]'
          }>
          <input
            type='checkbox'
            name='rating_4'
            id='rating_4_input'
          />
          <label
            htmlFor='rating_4_input'
            className={
              'w-full h-fit flex flex-row items-center justify-start gap-[0]'
            }>
            <AiFillStar fill={'#ffde0a'} />
            <AiFillStar fill={'#ffde0a'} />
            <AiFillStar fill={'#ffde0a'} />
            <AiFillStar fill={'#ffde0a'} />
            <AiOutlineStar fill={'#ffde0a'} />
          </label>
        </li>
        <li
          className={
            'w-full h-fit my-[0.25rem] flex flex-row items-center justify-start gap-[1rem]'
          }>
          <input
            type='checkbox'
            name='rating_3'
            id='rating_3_input'
          />
          <label
            htmlFor='rating_3_input'
            className={
              'w-full h-fit flex flex-row items-center justify-start gap-[0]'
            }>
            <AiFillStar fill={'#ffde0a'} />
            <AiFillStar fill={'#ffde0a'} />
            <AiFillStar fill={'#ffde0a'} />
            <AiOutlineStar fill={'#ffde0a'} />
            <AiOutlineStar fill={'#ffde0a'} />
          </label>
        </li>
        <li
          className={
            'w-full h-fit my-[0.25rem] flex flex-row items-center justify-start gap-[1rem]'
          }>
          <input
            type='checkbox'
            name='rating_2'
            id='rating_2_input'
          />
          <label
            htmlFor='rating_2_input'
            className={
              'w-full h-fit flex flex-row items-center justify-start gap-[0]'
            }>
            <AiFillStar fill={'#ffde0a'} />
            <AiFillStar fill={'#ffde0a'} />
            <AiOutlineStar fill={'#ffde0a'} />
            <AiOutlineStar fill={'#ffde0a'} />
            <AiOutlineStar fill={'#ffde0a'} />
          </label>
        </li>
        <li
          className={
            'w-full h-fit my-[0.25rem] flex flex-row items-center justify-start gap-[1rem]'
          }>
          <input
            type='checkbox'
            name='rating_1'
            id='rating_1_input'
          />
          <label
            htmlFor='rating_1_input'
            className={
              'w-full h-fit flex flex-row items-center justify-start gap-[0]'
            }>
            <AiFillStar fill={'#ffde0a'} />
            <AiOutlineStar fill={'#ffde0a'} />
            <AiOutlineStar fill={'#ffde0a'} />
            <AiOutlineStar fill={'#ffde0a'} />
            <AiOutlineStar fill={'#ffde0a'} />
          </label>
        </li>
      </ul>
    </>
  );
}

export default RatingFilter;
