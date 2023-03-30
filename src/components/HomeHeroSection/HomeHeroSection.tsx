import React from 'react';
import Container from '../Container/Container';
import HomeHeroCategoryList from '../HomeHeroCategoryList/HomeHeroCategoryList';
import SlideShow from '../SlideShow/SlideShow';
import HeroNoticePanel from '../HeroNoticePanel/HeroNoticePanel';

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
          <HeroNoticePanel />
        </div>
      </Container>
    </section>
  );
}

export default HomeHeroSection;
