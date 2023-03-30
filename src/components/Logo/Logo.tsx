import Image from 'next/image';
import React from 'react';
import logo from '../../assets/next-ecommerce-logo.png';

function Logo() {
  return (
    <div className={'w-fit h-fit'}>
      <Image
        alt={'logo'}
        src={logo.src}
        width={160}
        height={50}
      />
    </div>
  );
}

export default Logo;
