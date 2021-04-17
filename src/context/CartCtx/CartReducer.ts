import { ICartCtx, CartAction } from './CartCtx';

const CartReducer = (state: ICartCtx, action: CartAction): ICartCtx => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        productsInCart: [...state.productsInCart, action.payload],
      };
    case 'REMOVE_PRODUCT_BY_ID':
      return {
        ...state,
        productsInCart: state.productsInCart.filter((cartItem) => cartItem.product.id !== action.payload),
      };
    case 'UPDATE_PRODUCT_AMOUNT':
      return {
        ...state,
        productsInCart: state.productsInCart.map((cartItem) => {
          if (cartItem.product.id === action.payload.productId) return { ...cartItem, amount: action.payload.amount };
          return cartItem;
        }),
      };
    default:
      return state;
  }
};

export default CartReducer;
