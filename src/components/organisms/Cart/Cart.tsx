import React, { useContext } from 'react';
import classnames from 'classnames';
import { GlobalCtx, CartCtx } from 'context';
import { Button } from 'components/atoms';
import { CartItem } from 'components/molecules';
import { FaChevronLeft } from 'react-icons/fa';

import './Cart.scss';

const Cart: React.FC = () => {
  const { isCartOpen, setCartOpen } = useContext(GlobalCtx);
  const { productsInCart } = useContext(CartCtx);

  return (
    <div className={classnames('Cart', { open: isCartOpen })}>
      <div className="cart-wrapper">
        <Button
          className="back-button"
          label="Volver a la tienda"
          icon={<FaChevronLeft />}
          onClick={() => setCartOpen(false)}
        />
        <div className="cart-title-wrapper">
          <h1 className="cart-title">Carrito de Compras</h1>
          <span className="items-counter">
            <span className="counter">{`${productsInCart.length}`}</span> items
          </span>
        </div>

        <div className="product-list-wrapper">
          <div className="product-list-header">
            <h3 className="header-text">Item</h3>
            <h3 className="header-text center">Cantidad</h3>
            <h3 className="header-text center">Precio</h3>
          </div>
          {productsInCart.map((cartItem) => (
            <CartItem key={cartItem.product.id} cartItem={cartItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
