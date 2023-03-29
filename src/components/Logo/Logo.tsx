import Image from 'next/image';
import React from 'react';

function Logo() {
  return (
    <div className={'w-fit h-fit'}>
      <Image
        alt={'logo'}
        src={''}
        width={160}
        className={'border-[2px]'}
      />
    </div>
  );
}

export default Logo;
