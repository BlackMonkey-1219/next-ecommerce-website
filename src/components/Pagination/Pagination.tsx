import React, { useState } from 'react';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';

function Pagination() {
  const [totalResultCount, setTotalResultCount] = useState(100);
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  function changeResultsPerPage(e: React.FormEvent) {
    e.preventDefault();
    const element = e.currentTarget as HTMLSelectElement;
    console.log(element.value, totalResultCount);
    setResultsPerPage(parseInt(element.value));
  }

  function pageUp(pageNumber: number) {
    const pageCount = totalResultCount / resultsPerPage;
    if (pageNumber > pageCount) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(pageNumber);
    }
  }

  function pageDown(pageNumber: number) {
    if (pageNumber <= 0) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(pageNumber);
    }
  }

  function refreshPage() {}

  return (
    <div
      className={
        'w-fit h-fit flex flex-row items-center justify-end gap-[1rem]'
      }>
      <select
        name='result_count_per_page'
        id='result_count_per_page_selector'
        defaultValue={10}
        onInput={changeResultsPerPage}
        className={'w-fit h-fit p-[0.25rem] rounded-md'}>
        <option value={10}>Show 10</option>
        <option value={20}>Show 20</option>
        <option value={30}>Show 30</option>
        <option value={40}>Show 40</option>
        <option value={50}>Show 50</option>
      </select>
      <div className={'w-fit h-fit flex flex-row items-center justify-center'}>
        <button
          onClick={(e) => {
            e.preventDefault();
            pageDown(currentPage - 1);
          }}
          className={
            'aspect-[1/1] w-[2rem] h-auto  border-[1px] bg-white rounded-l-md'
          }>
          <AiOutlineCaretLeft />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            pageDown(currentPage - 1);
          }}
          className={
            'aspect-[1/1] w-[2rem] h-auto  border-[1px] bg-white leading-[1] font-bold'
          }>
          {currentPage - 1 < 1 ? '...' : currentPage - 1}
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            refreshPage();
          }}
          className={
            'aspect-[1/1] w-[2rem] h-auto  border-[1px] bg-white leading-[1] font-bold'
          }>
          {currentPage}
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            pageUp(currentPage + 1);
          }}
          className={
            'aspect-[1/1] w-[2rem] h-auto  border-[1px] bg-white leading-[1] font-bold'
          }>
          {currentPage + 1 > totalResultCount / resultsPerPage
            ? '...'
            : currentPage + 1}
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            pageUp(currentPage + 1);
          }}
          className={
            'aspect-[1/1] w-[2rem] h-auto  border-[1px] bg-white rounded-r-md'
          }>
          <AiOutlineCaretRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
