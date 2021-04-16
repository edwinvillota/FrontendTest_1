import React from 'react';
import { Logo, SeachBar, Button } from 'components/atoms';
import { UserProfile } from 'components/molecules';
import { FaShoppingCart } from 'react-icons/fa';

import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="Header">
      <Logo />
      <SeachBar className="header-searchbar" placeholder="Busca marcas y productos" />
      <Button className="cart-button" icon={<FaShoppingCart size={25} color="white" />} rounded />
      <UserProfile name="Edwin Villota" picture="https://randomuser.me/api/portraits/men/41.jpg" />
    </header>
  );
};

export default Header;
