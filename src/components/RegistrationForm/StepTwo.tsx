import React, { FormEvent } from 'react';
import Input from '../Input/Input';

interface iStep {
  onInput: (e: FormEvent) => void;
}

function StepTwo({ onInput }: iStep) {
  return (
    <div
      className={
        'w-full h-fit flex flex-col items-start justify-start gap-[0.25rem]'
      }>
      <Input
        type={'text'}
        width={'full'}
        height={'fit'}
        name={'user_country'}
        id={'user_country_input'}
        colorScheme={'NORMAL'}
        placeholder={'Country'}
        required={true}
        onInput={onInput}
      />
      <Input
        type={'text'}
        width={'full'}
        height={'fit'}
        name={'user_state'}
        id={'user_state_input'}
        colorScheme={'NORMAL'}
        placeholder={'State'}
        required={true}
        onInput={onInput}
      />
      <Input
        type={'text'}
        width={'full'}
        height={'fit'}
        name={'user_city'}
        id={'user_city_input'}
        colorScheme={'NORMAL'}
        placeholder={'City'}
        required={true}
        onInput={onInput}
      />
      <Input
        type={'text'}
        width={'full'}
        height={'fit'}
        name={'user_address_line_one'}
        id={'user_address_line_one_input'}
        colorScheme={'NORMAL'}
        placeholder={'Address Line #1'}
        required={false}
        onInput={onInput}
      />
      <Input
        type={'text'}
        width={'full'}
        height={'fit'}
        name={'user_address_line_two'}
        id={'user_address_line_two_input'}
        colorScheme={'NORMAL'}
        placeholder={'Address Line #2'}
        required={false}
        onInput={onInput}
      />
      <Input
        type={'text'}
        width={'full'}
        height={'fit'}
        name={'user_address_line_three'}
        id={'user_address_line_three_input'}
        colorScheme={'NORMAL'}
        placeholder={'Address Line #3'}
        required={false}
        onInput={onInput}
      />
      <Input
        type={'text'}
        width={'full'}
        height={'fit'}
        name={'user_postal_code'}
        id={'user_postal_code_input'}
        colorScheme={'NORMAL'}
        placeholder={'Postal Code'}
        required={true}
        onInput={onInput}
      />
    </div>
  );
}

export default StepTwo;
