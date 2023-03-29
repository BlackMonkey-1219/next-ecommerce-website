import React from 'react';

import { HiOutlineUserCircle } from 'react-icons/hi';
import { FiHeart } from 'react-icons/fi';
import { BsTruck, BsCart3 } from 'react-icons/bs';

function ToolbarLinks() {
  return (
    <div
      className={
        'w-fit h-fit flex flex-row items-center justify-start gap-[0.25rem]'
      }>
      <button
        className={
          'w-fit h-fit p-[0.25rem] flex flex-col items-center justify-center gap-[0.25rem]'
        }>
        <HiOutlineUserCircle />
        Profile
      </button>
      <button
        className={
          'w-fit h-fit p-[0.25rem] flex flex-col items-center justify-center gap-[0.25rem]'
        }>
        <FiHeart />
        Favorites
      </button>
      <button
        className={
          'w-fit h-fit p-[0.25rem] flex flex-col items-center justify-center gap-[0.25rem]'
        }>
        <BsTruck />
        Orders
      </button>
      <button
        className={
          'w-fit h-fit p-[0.25rem] flex flex-col items-center justify-center gap-[0.25rem]'
        }>
        <BsCart3 />
        MyCart
      </button>
    </div>
  );
}

export default ToolbarLinks;
