import React, { FormEvent, useEffect, useRef } from 'react';
import useStep from '@/hooks/useStep';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import Button from '../Button/Button';

function RegistrationForm() {
  const userData = useRef(new Map());
  const { currentStep, isFinal, prev, next } = useStep([
    <StepOne
      key={Date.now().toString()}
      onInput={onDataInput}
    />,
    <StepTwo
      key={Date.now().toString()}
      onInput={onDataInput}
    />,
  ]);

  function onDataInput(e: FormEvent) {
    const dataName = (e.currentTarget as HTMLInputElement).name;
    const data = (e.currentTarget as HTMLInputElement).value;
    userData.current.set(dataName, data);
  }

  function onFormSubmit(e: FormEvent) {
    e.preventDefault();
    if (isFinal) {
      console.log(userData.current);
    } else {
      next();
    }
  }

  return (
    <form
      action=''
      onSubmit={onFormSubmit}
      className={'w-[90%] h-fit mx-auto p-[1rem] border-[2px] rounded-md'}>
      <h3 className={'text-center'}>Register</h3>
      <div>{currentStep}</div>
      <hr className={'my-[0.5rem]'} />
      <div className={'flex flex-col items-center justify-start gap-2'}>
        <Button
          width={'full'}
          height={'fit'}
          type={'primary'}>
          {isFinal ? 'COMPLETE' : 'NEXT'}
        </Button>
        <Button
          width={'full'}
          height={'fit'}
          type={'secondary'}
          action={(e) => {
            e.preventDefault();
            prev();
          }}>
          Previous
        </Button>
      </div>
    </form>
  );
}

export default RegistrationForm;
