import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { IconContext } from 'react-icons';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <IconContext.Provider value={{ size: '1.5rem' }}>
        <Component {...pageProps} />;
      </IconContext.Provider>
    </SessionProvider>
  );
}
