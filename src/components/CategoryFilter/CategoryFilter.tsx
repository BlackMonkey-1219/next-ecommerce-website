import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

function CategoryFilter() {
  const [categories, setCategories] = useState([
    'All Categories',
    'Mens Fashion',
    'Womens Fashion',
    'Pets',
    'Outdoor',
    'Spots',
    'Electronics',
  ]);

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
        className={`overflow-hidden transition-all duration-500 ${
          open ? 'h-fit' : 'h-[0]'
        }`}>
        {categories.map((category, index) => {
          return (
            <li
              key={`category_${Math.random()}`}
              className={'w-full h-fit'}>
              <input
                type='checkbox'
                name={'category_filter'}
                id={`category_${category}`}
                className={'mr-[0.5rem]'}
              />
              <label htmlFor={`category_${category}`}>{category}</label>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CategoryFilter;
5;
