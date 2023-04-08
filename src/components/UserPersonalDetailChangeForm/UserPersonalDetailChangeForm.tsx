import React from 'react';

function UserPersonalDetailChangeForm() {
  return (
    <form
      className={
        'w-full h-full flex flex-col items-start justify-between gap-[0.25rem]'
      }>
      <div
        className={
          'w-full h-fit flex flex-row items-center justify-start gap-[0.25rem]'
        }>
        <input
          type='text'
          name='user_name'
          id='user_name_input'
          defaultValue={'User Name'}
          maxLength={15}
          className={
            'w-full h-fit p-[0.5rem] text-base font-semibold border-[2px] border-gray-500 rounded-md leading-[1]'
          }
        />
        <input
          type='email'
          name='user_email'
          id='user_email_input'
          defaultValue={'#01user@gmail.com'}
          className={
            'w-full h-fit p-[0.5rem] text-base font-semibold border-[2px] border-gray-500 rounded-md leading-[1]'
          }
        />
        <input
          type='date'
          name='user_birth_day'
          id='user_birth_day_input'
          defaultValue={'1999-12-19'}
          className={
            'w-full h-fit p-[0.65rem] text-base font-semibold border-[2px] border-gray-500 rounded-md leading-[1]'
          }
        />
      </div>
      <button
        className={
          'w-full h-fit p-[0.5rem] bg-gradient-to-b from-emerald-400 to-emerald-700 text-white font-semibold rounded-md'
        }>
        SAVE
      </button>
    </form>
  );
}

export default UserPersonalDetailChangeForm;
