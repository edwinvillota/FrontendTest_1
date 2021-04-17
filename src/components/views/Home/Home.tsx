import React, { useContext } from 'react';
import { ProductCtx } from 'context';
import { ProductCard } from 'components/molecules';

import './Home.scss';

const Home: React.FC = () => {
  const { products } = useContext(ProductCtx);

  return (
    <div className="Home">
      <h1>Home</h1>
      <div className="products-list">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
