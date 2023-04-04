import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

function FeatureFilter() {
  const [features, setFeatures] = useState([
    '1GB RAM',
    '2GB RAM',
    '4GB RAM',
    'Camera Array',
    '4K DISPLAY',
    'WIRELESS CHARGING',
    'SATELITE CONNECTION',
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
          Features
        </strong>
        {open ? <AiFillCaretDown /> : <AiFillCaretUp />}
      </div>
      <ul
        className={` w-full ${
          open ? 'h-[10rem] p-[0.5rem]' : 'h-[0] p-[0]'
        } border-[1px] rounded-md overflow-y-auto transition-all duration-500`}>
        {features.map((feature, index) => {
          return (
            <li
              key={`feature_${index}_${Math.random()}`}
              className={'w-full h-fit'}>
              <input
                type='checkbox'
                name='feature_filter'
                id={`feature_${feature}`}
                className={'mr-[0.5rem]'}
              />
              <label htmlFor={`feature_${feature}`}>{feature}</label>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FeatureFilter;
