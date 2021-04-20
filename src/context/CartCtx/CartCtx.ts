import React from 'react';
import { CartItem } from 'ts/models';

export type CartAction =
  | { type: 'ADD_PRODUCT'; payload: CartItem }
  | { type: 'REMOVE_PRODUCT_BY_ID'; payload: number }
  | { type: 'UPDATE_PRODUCT_AMOUNT'; payload: { productId: number; amount: number } };

export interface ICartCtx {
  productsInCart: CartItem[] | [];
  addCartItem?: (cartItem: CartItem) => void;
  updateCartItem?: ({ productId, amount }: { productId: number; amount: number }) => void;
  removeCartItem?: (productId: number) => void;
}

const CartCtx = React.createContext({} as ICartCtx);

export default CartCtx;
