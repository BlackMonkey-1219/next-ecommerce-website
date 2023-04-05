import Image from 'next/image';
import React from 'react';

const sizeOptions = {
  sm: 'w-[2rem]',
  md: 'w-[3.5rem]',
  lg: 'w-[4.25rem]',
  xl: 'w-[5rem]',
};

interface iAvatar {
  size: 'sm' | 'md' | 'lg' | 'xl';
}

function Avatar({ size }: iAvatar) {
  return (
    <div
      className={`relative aspect-[1/1] ${sizeOptions[size]} h-auto rounded-full overflow-hidden`}>
      <Image
        src={''}
        alt={''}
        fill={true}
        className={
          'aspect-[1/1] w-full h-auto rounded-full border-[2px] border-clr-primary '
        }
      />
    </div>
  );
}

export default Avatar;
