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
          Category
        </strong>
        {open ? <AiFillCaretDown /> : <AiFillCaretUp />}
      </div>
      <ul className={`overflow-hidden w-full ${open ? 'h-fit' : 'h-[0]'}`}>
        <li>
          <input
            type='checkbox'
            name='condition_new'
            id='condition_new_input'
            className={'mr-[0.5rem]'}
          />
          <label htmlFor='condition_new_input'>Brand New</label>
        </li>
        <li>
          <input
            type='checkbox'
            name='condition_used'
            id='condition_used_input'
            className={'mr-[0.5rem]'}
          />
          <label htmlFor='condition_used_input'>Used</label>
        </li>
        <li>
          <input
            type='checkbox'
            name='condition_reconditioned'
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
