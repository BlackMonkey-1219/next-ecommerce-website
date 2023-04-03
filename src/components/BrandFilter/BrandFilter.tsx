import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

function BrandFilter() {
  const [brands, setBrands] = useState([
    'Samsung',
    'Oppo',
    'Volvo',
    'Linux',
    'Windows',
    'Appple',
    'Mortola',
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
      <ul className={`overflow-hidden w-full ${open ? 'h-fit' : 'h-[0]'}`}>
        {brands.map((brand, index) => {
          return (
            <li
              key={`brand_${index}_${Math.random()}`}
              className={'w-full h-fit '}>
              <input
                type='checkbox'
                name={'brand_filter'}
                id={`brand_${brand}`}
                className={'mr-[0.5rem]'}
              />
              <label htmlFor={`brand_${brand}`}>{brand}</label>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default BrandFilter;
