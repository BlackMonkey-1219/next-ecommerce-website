import React, { useState } from 'react';
import { BsFillGridFill } from 'react-icons/bs';
import { FaThList } from 'react-icons/fa';

function SearchResulViewOptionPanel() {
  const [resultCount, setResultCount] = useState(10);
  const [viewType, setViewType] = useState(1);

  function viewChangeHandler(type: number) {
    setViewType(type);
  }

  return (
    <div
      className={
        'w-full h-fit p-[0.5rem] flex flex-row items-center justify-between bg-white rounded-md'
      }>
      <span>{resultCount} Items Found</span>
      <span className={'flex flex-row items-center justify-start gap-[0rem]'}>
        <button
          onClick={(e) => {
            e.preventDefault();
            viewChangeHandler(1);
          }}
          className={`p-[0.25rem] border-[2px] ${
            viewType == 1 ? 'bg-clr-primary' : 'bg-transparent'
          } rounded-l-md`}>
          <BsFillGridFill fill={`${viewType == 1 ? 'white' : 'black'}`} />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            viewChangeHandler(2);
          }}
          className={` p-[0.25rem] border-[2px] ${
            viewType == 2 ? 'bg-clr-primary' : 'bg-transparent'
          } rounded-r-md`}>
          <FaThList fill={`${viewType == 2 ? 'white' : 'black'}`} />
        </button>
      </span>
    </div>
  );
}

export default SearchResulViewOptionPanel;
