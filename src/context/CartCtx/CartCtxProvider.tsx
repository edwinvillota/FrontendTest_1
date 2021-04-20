import React, { useReducer } from 'react';
import { CartCtx } from 'context/CartCtx';
import { ICartCtx } from './CartCtx';
import { CartReducer } from '.';
import { CartItem } from 'ts/models';

const { Provider } = CartCtx;

const initialState: ICartCtx = {
  productsInCart: [],
};

const CartCtxProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addCartItem = (cartItem: CartItem) => {
    dispatch({ type: 'ADD_PRODUCT', payload: cartItem });
  };

  const updateCartItem = ({ productId, amount }: { productId: number; amount: number }) => {
    dispatch({ type: 'UPDATE_PRODUCT_AMOUNT', payload: { productId, amount } });
  };

  const removeCartItem = (productId: number) => {
    dispatch({ type: 'REMOVE_PRODUCT_BY_ID', payload: productId });
  };

  return <Provider value={{ ...state, addCartItem, updateCartItem, removeCartItem }}> {children}</Provider>;
};

export default CartCtxProvider;
