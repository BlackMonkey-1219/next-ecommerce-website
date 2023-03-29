import React from 'react';

function Countdown() {
  return (
    <div
      className={
        'w-fit h-fit flex flex-row items-center justify-start gap-[0.5rem]'
      }>
      <div
        className={
          'aspect-[1/1.5] w-[3em] h-auto p-[0.25rem] flex flex-col items-center justify-center gap-[0.25rem] rounded-md bg-clr-primary/10'
        }>
        <b>04</b>
        <small>Days</small>
      </div>
      <div
        className={
          'aspect-[1/1.5] w-[3em] h-auto p-[0.25rem] flex flex-col items-center justify-center gap-[0.25rem] rounded-md bg-clr-primary/10'
        }>
        <b>18</b>
        <small>Hour</small>
      </div>
      <div
        className={
          'aspect-[1/1.5] w-[3em] h-auto p-[0.25rem] flex flex-col items-center justify-center gap-[0.25rem] rounded-md bg-clr-primary/10'
        }>
        <b>27</b>
        <small>Mins</small>
      </div>
      <div
        className={
          'aspect-[1/1.5] w-[3em] h-auto p-[0.25rem] flex flex-col items-center justify-center gap-[0.25rem] rounded-md bg-clr-primary/10'
        }>
        <b>13</b>
        <small>Secs</small>
      </div>
    </div>
  );
}

export default Countdown;
