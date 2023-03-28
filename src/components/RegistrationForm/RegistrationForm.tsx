import React, { FormEvent, useContext, useEffect, useRef } from 'react';
import useStep from '@/hooks/useStep';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import Button from '../Button/Button';
import { registration_context } from '@/stores/RegistrationDataStore';
import useFetch from '@/hooks/useFetch';
import { AddUserRequest } from '@/types/user_route.types';

function RegistrationForm() {
  // ===================================================================
  const registrationDataContext = useContext(registration_context);
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
  const { isLoading, execute } = useFetch('/api/user/add_user');
  // ===================================================================

  //* STORES INPUT DATA IN THE CONTEXT =========================================
  function onDataInput(e: FormEvent) {
    const dataName = (e.currentTarget as HTMLInputElement).name;
    const data = (e.currentTarget as HTMLInputElement).value;
    registrationDataContext.registrationDataMap.set(dataName, data);
  }

  //* SEND USER REG DATA TO API ================================================
  async function submitData() {
    const dataMap = registrationDataContext.registrationDataMap;

    const regData: AddUserRequest = {
      user_first_name: dataMap.get('user_first_name'),
      user_last_name: dataMap.get('user_last_name'),
      user_email: dataMap.get('user_email'),
      user_birthday: dataMap.get('user_birthday'),
      user_country: dataMap.get('user_country'),
      user_state: dataMap.get('user_state'),
      user_city: dataMap.get('user_city'),
      user_address: [
        dataMap.get('user_address_line_one'),
        dataMap.get('user_address_line_two'),
        dataMap.get('user_address_line_three'),
      ],
      user_postal_code: dataMap.get('user_postal_code'),
      user_contact_number: dataMap.get('user_contact_number'),
    };

    const result = await execute({
      method: 'POST',
      body: JSON.stringify(regData),
    });
    console.log(result);
  }

  //* CHECK INPUTS & MOVE TO NEXT STEP =========================================
  function onFormSubmit(e: FormEvent) {
    e.preventDefault();
    if (isFinal) {
      console.log(registrationDataContext.registrationDataMap.entries());
      submitData();
    } else {
      next();
    }
  }

  // ===================================================================
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
