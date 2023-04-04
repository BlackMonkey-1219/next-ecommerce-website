import React from 'react';

const widthOptions = {
  full: 'w-full',
  fit: 'w-fit',
};

const heightOptions = {
  full: 'w-full',
  fit: 'w-fit',
};

const typeOptions = {
  primary: 'text-white bg-gradient-to-b from-sky-500 to-clr-primary',
  secondary: 'text-clr-primary border-[1px] border-clr-secondary/10',
};

interface iSelectButton {
  width: 'fit' | 'full';
  height: 'fit' | 'full';
  type: 'primary' | 'secondary';
  name: string;
  value: string;
}

function CheckBoxButton({ width, height, type, name, value }: iSelectButton) {
  return (
    <div
      className={`${widthOptions[width]} ${heightOptions[height]} px-[0.75em] py-[0.5em] ${typeOptions[type]} rounded-md flex flex-row items-center justify-center gap-2`}>
      <input
        type='checkbox'
        name={name}
        id={`${name}_checkbox`}
        value={value}
        className={'aspect-[1/1] w-4'}
      />
      <label
        htmlFor={`${name}_checkbox`}
        className={'font-semibold'}>
        {value}
      </label>
    </div>
  );
}

export default CheckBoxButton;
