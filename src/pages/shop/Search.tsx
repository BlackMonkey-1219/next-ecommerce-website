import BrandFilter from '@/components/BrandFilter/BrandFilter';
import CategoryFilter from '@/components/CategoryFilter/CategoryFilter';
import Container from '@/components/Container/Container';
import FeatureFilter from '@/components/FeatureFilter/FeatureFilter';
import Footer from '@/components/Footer/Footer';
import ItemConditionFilter from '@/components/ItemConditionFilter/ItemConditionFilter';
import Navigation from '@/components/Navigation/Navigation';
import NewsletterOptinSection from '@/components/NewsletterOptinSection/NewsletterOptinSection';
import Pagination from '@/components/Pagination/Pagination';
import PriceFilter from '@/components/PriceFilter/PriceFilter';
import RatingFilter from '@/components/RatingFilter/RatingFilter';
import SearchResulViewOptionPanel from '@/components/SearchResulViewOptionPanel/SearchResulViewOptionPanel';
import SearchResult from '@/components/SearchResult/SearchResult';
import Toolbar from '@/components/Toolbar/Toolbar';
import Head from 'next/head';
import React from 'react';

function Search() {
  return (
    <>
      <Head>
        <meta
          http-equiv='X-UA-Compatible'
          content='IE=7'
        />
        <meta
          name='description'
          content='search across the entire web site.'
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
      <main className={'mt-[2rem]'}>
        <Container>
          <div
            className={
              'w-full h-fit flex flex-row items-start justify-center gap-[1rem]'
            }>
            <div
              className={
                'flex-[1] w-full h-fit p-[0.5rem] bg-white rounded-md'
              }>
              <hr />
              <CategoryFilter />
              <hr />
              <BrandFilter />
              <hr />
              <FeatureFilter />
              <hr />
              <PriceFilter />
              <hr />
              <ItemConditionFilter />
              <hr />
              <RatingFilter />
            </div>
            <div className={'flex-[3] w-full h-fit '}>
              <SearchResulViewOptionPanel />
              <ul
                className={
                  'w-full h-fit mt-[1rem] flex flex-col items-start justify-start gap-[1rem]'
                }>
                <li>
                  <SearchResult />
                </li>
              </ul>
            </div>
          </div>
          <div
            className={
              'w-full h-fit flex flex-row items-center justify-end gap-[1rem]'
            }>
            <Pagination />
          </div>
        </Container>
        <NewsletterOptinSection />
      </main>
      <Footer />
    </>
  );
}

export default Search;
