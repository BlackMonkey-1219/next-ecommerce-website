import React from 'react';

import { FiHeart } from 'react-icons/fi';
import { BsTruck, BsCart3 } from 'react-icons/bs';
import { signIn, useSession } from 'next-auth/react';
import { FaRegUserCircle, FaUserCircle } from 'react-icons/fa';
import Button from '../Button/Button';
import { useRouter } from 'next/router';

function ToolbarLinks() {
  const { data: authData, status: authStatus } = useSession();
  const router = useRouter();

  return (
    <div
      className={
        'w-fit h-fit flex flex-row items-center justify-start gap-[0.25rem]'
      }>
      {authStatus == 'authenticated' ? (
        <>
          <button
            onClick={(e) => {
              e.preventDefault();
              router.replace('/user/Profile');
            }}
            className={
              'w-fit h-fit p-[0.25rem] flex flex-col items-center justify-center gap-[0.25rem]'
            }>
            <FaUserCircle />
            Profile
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              router.replace('/user/Favourites');
            }}
            className={
              'w-fit h-fit p-[0.25rem] flex flex-col items-center justify-center gap-[0.25rem]'
            }>
            <FiHeart />
            Favorites
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              router.replace('/user/Orders');
            }}
            className={
              'w-fit h-fit p-[0.25rem] flex flex-col items-center justify-center gap-[0.25rem]'
            }>
            <BsTruck />
            Orders
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              router.replace('/user/Cart');
            }}
            className={
              'w-fit h-fit p-[0.25rem] flex flex-col items-center justify-center gap-[0.25rem]'
            }>
            <BsCart3 />
            MyCart
          </button>
        </>
      ) : (
        <Button
          width={'fit'}
          height={'fit'}
          type={'secondary'}
          action={(e) => {
            e.preventDefault();
            signIn('google', { callbackUrl: '/' });
          }}
          classes={'flex flex-row items-center justify-center gap-[0.5rem]'}>
          <FaRegUserCircle size={'2rem'} />
          Sign In
        </Button>
      )}
    </div>
  );
}

export default ToolbarLinks;
