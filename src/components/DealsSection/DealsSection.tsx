import React from 'react';
import Container from '../Container/Container';
import Countdown from '../Countdown/Countdown';
import Image from 'next/image';
import DealItemCard from '../DealItemCard/DealItemCard';

function DealsSection() {
  return (
    <section className={'my-[5rem]'}>
      <Container>
        <div
          className={
            'w-full h-fit p-[1rem] flex flex-row items-stretch justify-start gap-[1rem] bg-white'
          }>
          <div>
            <b className={'text-xl'}>Hot Deals & Offers</b>
            <br />
            <p>Featured</p>
            <Countdown />
          </div>
          <div
            className={
              'w-full h-fit py-[1rem] overflow-x-auto overflow-y-hidden'
            }>
            <ul
              className={
                'w-fit h-fit flex flex-row items-center justify-start gap-[0.5rem]'
              }>
              <li>
                <DealItemCard />
              </li>
              <li>
                <DealItemCard />
              </li>
              <li>
                <DealItemCard />
              </li>
              <li>
                <DealItemCard />
              </li>
              <li>
                <DealItemCard />
              </li>
              <li>
                <DealItemCard />
              </li>
              <li>
                <DealItemCard />
              </li>
              <li>
                <DealItemCard />
              </li>
              <li>
                <DealItemCard />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default DealsSection;
