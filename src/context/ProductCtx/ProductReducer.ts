import { IProductCtx, ProductAction } from './ProductCtx';

const ProductReducer = (state: IProductCtx, action: ProductAction): IProductCtx => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default ProductReducer;
