import React from 'react';
import { Header } from 'components/organisms';

import './DefaultLayout.scss';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className="DefaultLayout">
      <Header />
      <div className="view__wrapper">{children}</div>
    </div>
  );
};

export default DefaultLayout;
