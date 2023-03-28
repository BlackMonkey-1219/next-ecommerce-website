import React, { FormEvent } from 'react';
import Input from '../Input/Input';

interface iStep {
  onInput: (e: FormEvent) => void;
}

function StepOne({ onInput }: iStep) {
  return (
    <div
      className={
        'w-full h-fit flex flex-col items-start justify-start gap-[0.25rem]'
      }>
      <Input
        type={'text'}
        width={'full'}
        height={'fit'}
        name={'user_first_name'}
        id={'user_first_name_input'}
        colorScheme={'NORMAL'}
        placeholder={'First Name'}
        required={true}
        onInput={onInput}
      />
      <Input
        type={'text'}
        width={'full'}
        height={'fit'}
        name={'user_last_name'}
        id={'user_last_name_input'}
        colorScheme={'NORMAL'}
        placeholder={'Last Name'}
        required={true}
        onInput={onInput}
      />
      <Input
        type={'month'}
        width={'full'}
        height={'fit'}
        name={'user_birthday'}
        id={'user_birthday_input'}
        colorScheme={'NORMAL'}
        required={true}
        onInput={onInput}
      />
      <Input
        type={'password'}
        width={'full'}
        height={'fit'}
        name={'user_password'}
        id={'user_password_input'}
        colorScheme={'NORMAL'}
        placeholder={'Password'}
      />
      <Input
        type={'tel'}
        width={'full'}
        height={'fit'}
        name={'user_contact_number'}
        id={'user_contact_number_input'}
        colorScheme={'NORMAL'}
        placeholder={'Contact Number'}
        required={true}
        onInput={onInput}
      />
    </div>
  );
}

export default StepOne;
