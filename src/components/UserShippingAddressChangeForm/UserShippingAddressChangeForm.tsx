import React from 'react';

function UserShippingAddressChangeForm() {
  return (
    <form
      className={
        'w-full h-fit flex flex-col items-start justify-start gap-[0.5rem]'
      }>
      <input
        type='text'
        name='user_country'
        id='user_country_input'
        defaultValue={'Sri Lanka'}
        className={
          'w-full h-fit p-[0.5rem] rounded-md bg-white border-[2px] border-gray-500 leading-[1]'
        }
      />
      <input
        type='text'
        name='user_state'
        id='user_state_input'
        defaultValue={'North Central'}
        className={
          'w-full h-fit p-[0.5rem] rounded-md bg-white border-[2px] border-gray-500 leading-[1]'
        }
      />
      <input
        type='text'
        name='user_city'
        id='user_city_input'
        defaultValue={'Anuradhapura'}
        className={
          'w-full h-fit p-[0.5rem] rounded-md bg-white border-[2px] border-gray-500 leading-[1]'
        }
      />
      <input
        type='text'
        name='user_address_line_one'
        id='user_address_line_one_input'
        defaultValue={'Ghanikulama'}
        className={
          'w-full h-fit p-[0.5rem] rounded-md bg-white border-[2px] border-gray-500 leading-[1]'
        }
      />
      <input
        type='text'
        name='user_address_line_two'
        id='user_address_line_two_input'
        defaultValue={'Shramadana Mawatha'}
        className={
          'w-full h-fit p-[0.5rem] rounded-md bg-white border-[2px] border-gray-500 leading-[1]'
        }
      />
      <input
        type='text'
        name='user_postal_code'
        id='user_postal_code_input'
        defaultValue={'50000'}
        className={
          'w-full h-fit p-[0.5rem] rounded-md bg-white border-[2px] border-gray-500 leading-[1]'
        }
      />
      <button
        className={
          'w-full h-fit p-[0.5rem] bg-gradient-to-b from-emerald-400 to-emerald-700 text-white font-semibold rounded-md'
        }>
        Change Shipping Address
      </button>
    </form>
  );
}

export default UserShippingAddressChangeForm;
