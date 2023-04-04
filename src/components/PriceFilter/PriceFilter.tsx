import React, { useState } from 'react';
import Button from '../Button/Button';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

function PriceFilter() {
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
          Price
        </strong>
        {open ? <AiFillCaretDown /> : <AiFillCaretUp />}
      </div>
      <div
        className={`overflow-hidden w-full ${
          open ? 'h-fit p-[0.5rem]' : 'h-[0] p-[0]'
        } border-[1px] rounded-md transition-all duration-500`}>
        <label htmlFor='min_price_input'>Minimum Price: </label>
        <input
          type='range'
          name='min_price'
          id='min_price_input'
          className={'w-full h-fit '}
        />
        <br />
        <label htmlFor='max_price_input'>Maximum Price: </label>
        <input
          type='range'
          name='max_price'
          id='max_price_input'
          className={'w-full h-fit '}
        />
        <Button
          width={'full'}
          height={'fit'}
          type={'secondary'}>
          Apply
        </Button>
      </div>
    </>
  );
}

export default PriceFilter;
