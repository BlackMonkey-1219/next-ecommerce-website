import React from 'react';
import Container from '../Container/Container';
import TopRatedShop from '../TopRatedShop/TopRatedShop';

function TopRatedShops() {
  return (
    <section>
      <Container>
        <ul>
          <li>
            <TopRatedShop />
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default TopRatedShops;
