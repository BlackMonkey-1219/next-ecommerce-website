import React from 'react';

function SlideShow() {
  return (
    <div className={'w-full h-fit overflow-x-auto overflow-y-hidden'}>
      <div
        className={
          'w-fit h-full flex flex-row items-center justify-start gap-[0]'
        }>
        <div className={'w-[855px] h-[530px] bg-green-500'}></div>
        <div className={'w-[855px] h-[530px] bg-emerald-500'}></div>
        <div className={'w-[855px] h-[530px] bg-red-500'}></div>
        <div className={'w-[855px] h-[530px] bg-blue-500'}></div>
        <div className={'w-[855px] h-[530px] bg-orange-500'}></div>
        <div className={'w-[855px] h-[530px] bg-yellow-500'}></div>
      </div>
    </div>
  );
}

export default SlideShow;
