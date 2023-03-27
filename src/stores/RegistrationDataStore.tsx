import React, { ReactNode, createContext, useRef, useState } from 'react';

const registration_context = createContext({
  setData: (name: string, value: string) => {},
  getData: (name: string) => {},
});

interface iRegistrationStore {
  children: ReactNode | ReactNode[];
}

function RegistrationDataStore({ children }: iRegistrationStore) {
  const registrationData = useRef(
    new Map([
      ['user_email', ''],
      ['user_password', ''],
      ['user_first_name', ''],
      ['user_last_name', ''],
      ['user_contact_number', ''],
      ['user_birthday', ''],
      ['user_country', ''],
      ['user_state', ''],
      ['user_city', ''],
      ['user_postal_code', ''],
      ['user_address_line_one', ''],
      ['user_address_line_two', ''],
      ['user_address_line_three', ''],
    ])
  );

  function setData(name: string, value: string) {
    console.log(registrationData);
    registrationData.current.set(name, value);
  }

  function getData(name: string) {
    return registrationData.current.get(name);
  }

  return (
    <registration_context.Provider
      value={{
        setData: setData,
        getData: getData,
      }}>
      {children}
    </registration_context.Provider>
  );
}
export { registration_context };
export default RegistrationDataStore;
