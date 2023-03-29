import React from 'react';
import Container from '../Container/Container';
import HomeHeroCategoryList from '../HomeHeroCategoryList/HomeHeroCategoryList';
import SlideShow from '../SlideShow/SlideShow';

function HomeHeroSection() {
  return (
    <section>
      <Container>
        <div
          className={
            'w-full h-fit p-[1rem] flex flex-row items-stretch justify-start gap-[1rem] bg-white'
          }>
          <HomeHeroCategoryList />
          <SlideShow />
        </div>
      </Container>
    </section>
  );
}

export default HomeHeroSection;
