import React, { ReactNode } from 'react';

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
  secondary: 'text-clr-primary border-[2px] border-clr-primary',
  disabled: 'text-gray-500 bg-gradient-to-b from-gray-300 to-gray-500',
};

interface iButton {
  width: 'full' | 'fit';
  height: 'full' | 'fit';
  type: 'primary' | 'secondary' | 'disabled';
  children: ReactNode | ReactNode[];
  disabled?: true | false;
  action?: (e: React.MouseEvent | React.TouchEvent) => void;
}

function Button({
  width,
  height,
  type,
  children,
  disabled = false,
  action,
}: iButton) {
  return (
    <button
      disabled={disabled}
      onClick={action}
      className={`${widthOptions[width]} ${heightOptions[height]} py-[0.5em] px-[0.75em] ${typeOptions[type]} font-normal rounded-md `}>
      {children}
    </button>
  );
}

export default Button;
