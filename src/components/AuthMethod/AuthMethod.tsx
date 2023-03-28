import React, {
  MouseEvent,
  TouchEvent,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import Button from '../Button/Button';
import { signIn, useSession } from 'next-auth/react';
import Input from '../Input/Input';
import { registration_context } from '@/stores/RegistrationDataStore';
import useFetch from '@/hooks/useFetch';

interface iAuthMethod {
  registrationStart: React.Dispatch<React.SetStateAction<boolean>>;
}

function AuthMethod({ registrationStart }: iAuthMethod) {
  // ==============================================================
  const { data: authData, status: authStatus } = useSession();
  const registrationContext = useContext(registration_context);
  const userEmailInput = useRef(null);
  const [message, setMessage] = useState('');
  const { isLoading, execute } = useFetch('/api/user/check_user');
  // ==============================================================

  // EMAIL CHECK ===============================================================
  const checkUserExistance = useCallback(
    async (userEmail: string) => {
      const result = await execute({
        method: 'POST',
        body: JSON.stringify({ user_email: userEmail }),
      });

      if (result.data.result == 1) {
        setMessage('THIS USER ALREADY EXISTS!');
      } else {
        registrationContext.registrationDataMap.set('user_email', userEmail!);
        registrationStart(true);
      }
    },
    [registrationStart, registrationContext, execute]
  );

  // CHECK USER EXISTANCE WHEN USING GOOGLE AUTH =============================
  useEffect(() => {
    if (authStatus == 'authenticated') {
      checkUserExistance(authData.user?.email!);
    }
  }, [authStatus, authData, checkUserExistance]);

  // REGISTER WITH EMAIL =====================================================
  function registerWithEmailButtonHandler(e: MouseEvent | TouchEvent) {
    e.preventDefault();

    const userEmail = (userEmailInput.current! as HTMLInputElement).value;
    if (userEmail.length <= 1 || !userEmail.includes('@')) {
      setMessage('Invalid Email Address!');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } else {
      checkUserExistance(userEmail);
    }
  }

  // ==============================================================
  return (
    <div className={'w-[90%] h-fit mx-auto p-[1rem] border-[2px] rounded-md'}>
      <h3 className={'text-center'}>Sign Up</h3>
      <p className={'text-center'}>{message}</p>
      <form
        action=''
        className={'flex flex-col items-center justify-start gap-[0.5rem]'}>
        <Input
          ref={userEmailInput}
          type={'email'}
          width={'full'}
          height={'fit'}
          name={'user_email'}
          id={'user_email_input'}
          colorScheme={'NORMAL'}
          placeholder={'Email'}
        />

        <Button
          width={'full'}
          height={'fit'}
          type={'secondary'}
          action={registerWithEmailButtonHandler}>
          Sign In with Email
        </Button>
      </form>
      <hr className={'my-[0.5rem]'} />
      <div>
        <Button
          width={'full'}
          height={'fit'}
          type={'primary'}
          action={(e) => {
            e.preventDefault();
            signIn('google', {
              callbackUrl: 'http:localhost:3000/auth/Signup',
            });
          }}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}

export default AuthMethod;
