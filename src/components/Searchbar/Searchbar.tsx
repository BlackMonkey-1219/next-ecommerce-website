import React from 'react';

function Searchbar() {
  return (
    <form
      className={
        'w-fit h-fit flex flex-row items-center justify-start border-[2px] border-clr-primary'
      }>
      <input
        type='text'
        name='search_query'
        id='search_query_input'
        placeholder={'Search'}
        className={'w-full max-w-[20em] h-fit px-[0.75em] py-[0.25em]'}
      />
      <select
        name='search_category'
        id='search_category_input'
        className={
          'w-fit h-fit px-[0.75em] py-[0.25em] border-l-[2px] border-clr-primary'
        }>
        <option value='all'>All Categories</option>
        <option value='health'>Health</option>
        <option value='home'>Home</option>
        <option value='kitchen'>Kitchen</option>
        <option value='electronics'>Electronics</option>
      </select>
      <button
        className={
          'w-[10em] h-fit px-[0.75em] py-[0.25em] bg-clr-primary text-white'
        }>
        Search
      </button>
    </form>
  );
}

export default Searchbar;
