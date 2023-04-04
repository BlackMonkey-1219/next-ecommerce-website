import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

function ItemConditionFilter() {
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
          Condition
        </strong>
        {open ? <AiFillCaretDown /> : <AiFillCaretUp />}
      </div>
      <ul
        className={` w-full ${
          open ? 'h-[10rem] p-[0.5rem]' : 'h-[0] p-[0]'
        } border-[1px] rounded-md overflow-y-auto transition-all duration-500`}>
        <li>
          <input
            type='radio'
            name='condition'
            value={'new'}
            id='condition_new_input'
            className={'mr-[0.5rem]'}
          />
          <label htmlFor='condition_new_input'>Brand New</label>
        </li>
        <li>
          <input
            type='radio'
            name='condition'
            value={'used'}
            id='condition_used_input'
            className={'mr-[0.5rem]'}
          />
          <label htmlFor='condition_used_input'>Used</label>
        </li>
        <li>
          <input
            type='radio'
            name='condition'
            value={'reconditioned'}
            id='condition_reconditioned_input'
            className={'mr-[0.5rem]'}
          />
          <label htmlFor='condition_reconditioned_input'>Reconditioned</label>
        </li>
      </ul>
    </>
  );
}

export default ItemConditionFilter;
