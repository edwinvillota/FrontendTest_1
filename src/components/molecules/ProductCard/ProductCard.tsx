import React, { useContext, useEffect, useState } from 'react';
import { CartCtx } from 'context';
import { Product } from 'ts/models';
import { Price, Button, Stamp } from 'components/atoms';

import './ProductCard.scss';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addCartItem, productsInCart } = useContext(CartCtx);
  const [inCart, setInCart] = useState(false);

  // Watch if the product is already in the cart
  useEffect(() => {
    const found = productsInCart.find((cartItem) => cartItem.product.id === product.id);

    setInCart(!!found);
  }, [product.id, productsInCart]);

  const handleAddToCart = (e) => {
    if (inCart) return;

    if (addCartItem) addCartItem({ product: product, amount: 1 });
  };

  return (
    <div className="ProductCard">
      <div className="card-image-wrapper">
        <img className="card-image" src={product.thumbnail} alt={`${product.title} image`} />
        <div className="stamp-bar">
          {product?.sellos?.map((stamp) => (
            <Stamp key={stamp.name} stamp={stamp} />
          ))}
        </div>
      </div>
      <div className="card-content-wrapper">
        <div className="logo">Superfüds</div>
        <div className="content">{product.net_content}</div>
      </div>
      <div className="card-title-wrapper">
        <span className="card-title">{product.title}</span>
      </div>
      <div className="card-price-wrapper">
        <Price className="card-price" price={product.price_real} units={product.units_sf} />
      </div>
      <Button
        label={inCart ? 'Agregado al carrito' : 'Agregar al carrito'}
        className="add-cart-button"
        onClick={handleAddToCart}
      />
    </div>
  );
};

export default ProductCard;
