import React from 'react';
import Container from '../Container/Container';
import Image from 'next/image';

import { AiFillStar } from 'react-icons/ai';
import RecommendedSectionItem from '../RecommendedSectionItem/RecommendedSectionItem';

function RecommendedItemsSection() {
  return (
    <section>
      <Container>
        <ul
          className={
            'w-full h-fit grid grid-cols-5 auto-rows-fr items-center justify-items-start gap-[0.5rem]'
          }>
          <li className={'w-full h-fit'}>
            <RecommendedSectionItem />
          </li>
          <li className={'w-full h-fit'}>
            <RecommendedSectionItem />
          </li>
          <li className={'w-full h-fit'}>
            <RecommendedSectionItem />
          </li>
          <li className={'w-full h-fit'}>
            <RecommendedSectionItem />
          </li>
          <li className={'w-full h-fit'}>
            <RecommendedSectionItem />
          </li>
          <li className={'w-full h-fit'}>
            <RecommendedSectionItem />
          </li>
          <li className={'w-full h-fit'}>
            <RecommendedSectionItem />
          </li>
          <li className={'w-full h-fit'}>
            <RecommendedSectionItem />
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default RecommendedItemsSection;
