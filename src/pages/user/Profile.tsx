import Button from '@/components/Button/Button';
import Container from '@/components/Container/Container';
import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import Toolbar from '@/components/Toolbar/Toolbar';
import UserDataPanel from '@/components/UserDataPanel/UserDataPanel';
import Head from 'next/head';
import React from 'react';

function Profile() {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='User profile'
        />
        <meta
          http-equiv='X-UA-Compatible'
          content='IE=7'
        />
        <meta
          http-equiv='X-UA-Compatible'
          content='ie=edge'
        />
        <meta
          http-equiv='Content-Type'
          content='text/html;charset=UTF-8'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
      </Head>
      <header>
        <Toolbar />
        <Navigation />
      </header>
      <main>
        <section className={'mt-[2rem]'}>
          <Container>
            <div className={'w-full h-fit p-[2rem] bg-white rounded-md'}>
              <h2 className={'m-[0] text-left'}>
                Become a island wide seller and improve your exposure
              </h2>
              <Button
                type={'primary'}
                width={'fit'}
                height={'fit'}>
                Become a seller
              </Button>
            </div>
          </Container>
        </section>
        <section className={'mt-[2rem]'}>
          <Container>
            <UserDataPanel />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
