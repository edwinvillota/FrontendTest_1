import React, { useReducer, useEffect } from 'react';
import { getProducts } from 'api/products';
import { ProductCtx } from 'context/ProductCtx';
import { IProductCtx } from './ProductCtx';
import { ProductReducer } from '.';

const { Provider } = ProductCtx;

const initialState: IProductCtx = {
  products: [],
};

const ProductCtxProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  // Load products
  useEffect(() => {
    const loadProducts = async () => {
      const { error, data: products, message } = await getProducts();

      if (error) return console.log(message);
      if (products) dispatch({ type: 'GET_PRODUCTS', payload: products });
    };

    loadProducts();
  }, []);

  return <Provider value={{ ...state }}>{children}</Provider>;
};

export default ProductCtxProvider;
