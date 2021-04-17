import React from 'react';
import { Product } from 'ts/models';

export type ProductAction = { type: 'GET_PRODUCTS'; payload: Product[] };

export interface IProductCtx {
  products: Product[] | null;
}

const ProductCtx = React.createContext({} as IProductCtx);

export default ProductCtx;
