import React from 'react';
import Container from '../Container/Container';
import Image from 'next/image';
import FeaturedCategoryItem from '../FeaturedCategoryItem/FeaturedCategoryItem';

function FeaturedCategorySection() {
  return (
    <section className={'my-[5rem]'}>
      <Container>
        <div
          className={
            'aspect-[4/1] w-full h-auto p-[1rem] flex flex-row items-stretch justify-start gap-[1rem] bg-white'
          }>
          <div className={'flex-[1] basis-[25%]'}>
            <b className={'text-xl'}>Home Decor</b>
            <br />
            <p>Featured</p>
          </div>
          <div
            className={
              'flex-[3] basis-[75%] w-auto h-auto py-[1rem] overflow-x-auto overflow-y-hidden'
            }>
            <ul
              className={
                'w-fit h-full flex flex-col items-start justify-start gap-[0.25rem] flex-wrap'
              }>
              <li>
                <FeaturedCategoryItem />
              </li>
              <li>
                <FeaturedCategoryItem />
              </li>
              <li>
                <FeaturedCategoryItem />
              </li>
              <li>
                <FeaturedCategoryItem />
              </li>
              <li>
                <FeaturedCategoryItem />
              </li>
              <li>
                <FeaturedCategoryItem />
              </li>
              <li>
                <FeaturedCategoryItem />
              </li>
              <li>
                <FeaturedCategoryItem />
              </li>
              <li>
                <FeaturedCategoryItem />
              </li>
              <li>
                <FeaturedCategoryItem />
              </li>
              <li>
                <FeaturedCategoryItem />
              </li>
              <li>
                <FeaturedCategoryItem />
              </li>
              <li>
                <FeaturedCategoryItem />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedCategorySection;
