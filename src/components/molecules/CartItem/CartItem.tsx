import React, { useContext } from 'react';
import { CartCtx } from 'context';
import { CartItem as CartItemModel } from 'ts/models';
import { Button, Price } from 'components/atoms';
import { FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa';

import './CartItem.scss';

type CartItemProps = {
  cartItem: CartItemModel;
};

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const { product, amount } = cartItem;
  const { removeCartItem, updateCartItem } = useContext(CartCtx);

  return (
    <div className="CartItem">
      <div className="item-wrapper">
        <div className="image-wrapper">
          <img className="image" src={product.thumbnail} alt={`${product.title} picture`} />
        </div>
        <div className="info-wrapper">
          <span className="info-title">{product.title}</span>
          <span className="info-content">{`x ${product.units_sf} unids - ${product.net_content} c/u`}</span>
          <span className="logo">Superfüds</span>
        </div>
      </div>
      <div className="amount-wrapper">
        <Button
          className="amount-button minus"
          icon={<FaMinus />}
          rounded
          disabled={amount <= 1}
          onClick={() => {
            updateCartItem && updateCartItem({ productId: product.id, amount: amount - 1 });
          }}
        />
        <span className="amount">{amount}</span>
        <Button
          className="amount-button plus"
          icon={<FaPlus />}
          rounded
          onClick={() => {
            updateCartItem && updateCartItem({ productId: product.id, amount: amount + 1 });
          }}
        />
      </div>
      <div className="price-wrapper">
        <Price price={`${parseInt(product.price_real) * amount}`} />
      </div>
      <div className="delete-wrapper">
        <Button
          className="delete-button"
          icon={<FaTrashAlt />}
          onClick={() => {
            removeCartItem && removeCartItem(product.id);
          }}
        />
      </div>
    </div>
  );
};

export default CartItem;
