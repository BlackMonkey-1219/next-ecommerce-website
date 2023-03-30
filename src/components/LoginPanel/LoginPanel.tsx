import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { signIn, signOut, useSession } from 'next-auth/react';
import Button from '../Button/Button';

function LoginPanel() {
  const { data: authData, status: authStatus } = useSession();

  return (
    <div
      className={
        'w-full h-fit p-[0.5rem] flex flex-col items-center justify-center gap-[1rem] bg-clr-primary/20 rounded-md'
      }>
      <FaUserCircle
        size={'3rem'}
        color={'var(--clr-primary)'}
      />
      {authStatus == 'authenticated' ? (
        <Button
          width={'full'}
          height={'fit'}
          type={'secondary'}
          action={(e) => {
            e.preventDefault();
            signOut({ callbackUrl: '/' });
          }}>
          Sign Out
        </Button>
      ) : (
        <Button
          width={'full'}
          height={'fit'}
          type={'primary'}
          action={(e) => {
            e.preventDefault();
            signIn('google', { callbackUrl: '/' });
          }}>
          Sign In
        </Button>
      )}
    </div>
  );
}

export default LoginPanel;
