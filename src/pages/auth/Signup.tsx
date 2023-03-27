import AuthMethod from '@/components/AuthMethod/AuthMethod';
import Container from '@/components/Container/Container';
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm';
import RegistrationDataStore from '@/stores/RegistrationDataStore';
import { useState } from 'react';

function Signup() {
  const [startRegistration, setStartRegistration] = useState(false);

  return (
    <RegistrationDataStore>
      <section
        className={
          'w-screen h-screen flex flex-col items-center justify-center'
        }>
        <Container>
          {startRegistration ? (
            <RegistrationForm />
          ) : (
            <AuthMethod registrationStart={setStartRegistration} />
          )}
        </Container>
      </section>
    </RegistrationDataStore>
  );
}

export default Signup;
