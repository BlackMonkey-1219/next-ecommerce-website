import React from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';
import { AiOutlineMail } from 'react-icons/ai';

function NewsletterOptinSection() {
  return (
    <section className={'w-full h-fit py-[5rem] my-[5rem] bg-white'}>
      <Container>
        <form
          action=''
          className={'w-fit h-fit mx-auto text-center'}>
          <h3>Subscribe to our newsletter</h3>
          <p>
            Get daily deals and news about latest items from suppliers all over
            the country
          </p>
          <div
            className={
              'w-fit h-fit mx-auto flex flex-row items-center justify-start gap-[0.5rem]'
            }>
            <div
              className={
                'w-fit h-fit p-[0.25rem] flex flex-row items-center justify-start rounded-md border-[1px]'
              }>
              <AiOutlineMail />
              <input
                type='email'
                name='user_email'
                id='user_email_input'
                placeholder={'Email'}
                className={'w-[20em] h-fit p-[0.25rem] '}
              />
            </div>
            <Button
              width={'fit'}
              height={'fit'}
              type={'primary'}>
              Subscribe
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}

export default NewsletterOptinSection;
