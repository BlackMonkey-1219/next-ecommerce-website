import React from 'react';
import Container from '../Container/Container';
import Searchbar from '../Searchbar/Searchbar';
import ToolbarLinks from '../ToolbarLinks/ToolbarLinks';
import Logo from '../Logo/Logo';

function Toolbar() {
  return (
    <div className={'w-full h-fit py-[1rem] border-t-[2px] bg-white'}>
      <Container>
        <div
          className={'w-full h-fit flex flex-row items-center justify-between'}>
          <Logo />
          <Searchbar />
          <ToolbarLinks />
        </div>
      </Container>
    </div>
  );
}

export default Toolbar;
