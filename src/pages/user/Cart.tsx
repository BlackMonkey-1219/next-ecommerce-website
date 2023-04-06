import CartPanel from '@/components/CartPanel/CartPanel';
import CartSummaryPanel from '@/components/CartSummaryPanel/CartSummaryPanel';
import Container from '@/components/Container/Container';
import CuponForm from '@/components/CuponForm/CuponForm';
import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import Toolbar from '@/components/Toolbar/Toolbar';
import Head from 'next/head';
import React from 'react';

function Cart() {
  return (
    <>
      <Head>
        <meta
          http-equiv='X-UA-Compatible'
          content='IE=7'
        />
        <meta
          name='description'
          content='user cart'
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
        <section>
          <Container>
            <h2>My Cart(3)</h2>
            <div
              className={
                'w-full h-fit flex flex-row items-start justify-start gap-[1rem]'
              }>
              <div className={'flex-3 w-full h-fit'}>
                <CartPanel />
              </div>
              <div
                className={
                  'flex-1 w-full h-fit flex flex-col items-center justify-start gap-[0.5rem]'
                }>
                <CuponForm />
                <CartSummaryPanel />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Cart;
