import React, { ReactNode, createContext, useRef, useState } from 'react';

const registration_context = createContext({
  registrationDataMap: new Map<any, any>(),
});

interface iRegistrationStore {
  children: ReactNode | ReactNode[];
}

function RegistrationDataStore({ children }: iRegistrationStore) {
  const registrationData = useRef<Map<any, any>>(new Map());

  return (
    <registration_context.Provider
      value={{
        registrationDataMap: registrationData.current,
      }}>
      {children}
    </registration_context.Provider>
  );
}
export { registration_context };
export default RegistrationDataStore;
