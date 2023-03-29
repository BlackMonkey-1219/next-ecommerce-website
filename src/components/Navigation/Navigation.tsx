import React from 'react';
import Container from '../Container/Container';

import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCaretDown } from 'react-icons/rx';

function Navigation() {
  return (
    <nav className={'w-full h-fit py-[1rem] border-y-[2px] bg-white'}>
      <Container>
        <div
          className={'w-full h-fit flex flex-row items-center justify-start'}>
          <ul
            className={
              'w-fit h-fit flex flex-row items-center justify-start gap-[1rem]'
            }>
            <li>
              <button
                className={
                  'w-fit h-fit flex flex-row items-center justify-center gap-[0.5rem]'
                }>
                <GiHamburgerMenu />
                All Categories
              </button>
            </li>
            <li>Hot Offers</li>
            <li>Gift Boxes</li>
            <li>
              <button
                className={
                  'w-fit h-fit flex flex-row items-center justify-center gap-[0.5rem]'
                }>
                Help
                <RxCaretDown />
              </button>
            </li>
          </ul>
          <button
            className={
              'w-fit h-fit ml-auto flex flex-row items-center justify-center gap-[0.5rem]'
            }>
            Ship To
            <RxCaretDown />
          </button>
        </div>
      </Container>
    </nav>
  );
}

export default Navigation;
