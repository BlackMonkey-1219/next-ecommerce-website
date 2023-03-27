import React from 'react';

const widthOptions = {
  fit: 'w-fit',
  full: 'w-full',
};

const heightOptions = {
  fit: 'h-fit',
  full: 'h-full',
};

const colorOptions = {
  OK: 'outline-green-500 border-green-500',
  WARNING: 'outline-yellow-500 border-yellow-500',
  ERROR: 'outline-red-500 border-red-500',
  NORMAL: 'outline-gray-500 border-gray-500',
};

interface iInput {
  width: 'full' | 'fit';
  height: 'full' | 'fit';
  type: string;
  name: string;
  id: string;
  colorScheme: 'OK' | 'WARNING' | 'ERROR' | 'NORMAL';
  placeholder?: string;
  onInput?: (e: React.FormEvent) => void;
  onBlur?: (e: React.FocusEvent) => void;
  classes?: string;
  required?: boolean;
}

function Input(
  {
    width,
    height,
    type,
    name,
    id,
    placeholder,
    onInput,
    onBlur,
    classes,
    required,
    colorScheme = 'NORMAL',
  }: iInput,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <input
      ref={ref}
      type={type}
      className={`${widthOptions[width]} ${
        heightOptions[height]
      } px-[0.75em] py-[0.5em] border-[2px] rounded-md outline-1 ${
        colorOptions[colorScheme]
      } ${classes ?? null}  `}
      id={id}
      name={name}
      placeholder={placeholder}
      onInput={onInput}
      onBlur={onBlur}
      required={required}
    />
  );
}

export default React.forwardRef(Input);
