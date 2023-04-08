import React from 'react';

function UserPasswordChangeForm() {
  return (
    <form
      className={
        'w-full h-full flex flex-col items-start justify-start gap-[0.5rem]'
      }>
      <div
        className={
          'w-full h-fit flex flex-row items-center justify-between gap-[1rem]'
        }>
        <label
          htmlFor='user_old_password_input'
          className={'w-[50%]'}>
          Old Password:
        </label>
        <label
          htmlFor='user_new_password_input'
          className={'w-[50%]'}>
          New Password:
        </label>
      </div>
      <div
        className={
          'w-full h-fit flex flex-row items-center justify-between gap-[1rem]'
        }>
        <input
          type='password'
          name='user_old_password'
          id='user_old_password_input'
          className={
            'w-[50%] h-fit p-[0.5rem] leading-[1] border-[2px] border-gray-500 rounded-md'
          }
        />

        <input
          type='password'
          name='user_new_password'
          id='user_new_password_input'
          className={
            'w-[50%] h-fit p-[0.5rem] leading-[1] border-[2px] border-gray-500 rounded-md'
          }
        />
      </div>
      <button
        className={
          'w-full h-fit p-[0.5rem] bg-gradient-to-b from-emerald-400 to-emerald-700 text-white font-semibold rounded-md'
        }>
        Change Password
      </button>
    </form>
  );
}

export default UserPasswordChangeForm;
