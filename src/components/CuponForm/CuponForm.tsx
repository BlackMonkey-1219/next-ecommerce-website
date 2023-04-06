import React from 'react';

function CuponForm() {
  return (
    <form
      action=''
      className={'w-full h-fit p-[1rem] bg-white border-[2px] rounded-md'}>
      <p>Have a cupon?</p>
      <div className={'w-full h-fit flex flex-row items-center justify-start'}>
        <input
          type='text'
          name='cupon_code'
          id='cupon_code_input'
          placeholder={'Enter Cupon Code...'}
          className={
            'flex-4 px-[0.5rem] py-[0.25rem] border-[2px] border-r-[0] border-clr-primary rounded-l-md'
          }
        />
        <button
          className={
            'flex-1 w-full h-full px-[0.5rem] py-[0.42rem] bg-gradient-to-b from-blue-400 to-blue-600 text-white rounded-r-md'
          }>
          Apply
        </button>
      </div>
    </form>
  );
}

export default CuponForm;
