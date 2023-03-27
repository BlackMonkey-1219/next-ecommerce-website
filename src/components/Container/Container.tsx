import React, { ReactNode } from 'react';

interface iContainer {
  children: ReactNode | ReactNode[];
}

function Container({ children }: iContainer) {
  return <div className={'w-full max-w-screen-xl mx-auto'}>{children}</div>;
}

export default Container;
