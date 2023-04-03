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
      <ul className={`overflow-hidden w-full ${open ? 'h-fit' : 'h-[0]'}`}>
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
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </label>
        </li>
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
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </label>
        </li>
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
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </label>
        </li>
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
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </label>
        </li>
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
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </label>
        </li>
      </ul>
    </>
  );
}

export default RatingFilter;
