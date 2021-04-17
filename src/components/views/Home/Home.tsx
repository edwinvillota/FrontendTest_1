import React, { useContext } from 'react';
import { ProductCtx } from 'context';
import { ProductCard, Carousel } from 'components/molecules';

import './Home.scss';

const Home: React.FC = () => {
  const { products } = useContext(ProductCtx);

  return (
    <div className="Home">
      <h1>Home</h1>
      <Carousel className="home-carousel" viewportClass="home-carousel-viewport" stepLength={210}>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
