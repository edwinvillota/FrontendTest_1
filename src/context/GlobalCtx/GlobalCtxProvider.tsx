import React, { useState } from 'react';
import { GlobalCtx } from 'context/GlobalCtx';

const { Provider } = GlobalCtx;

const GlobalCtxProvider: React.FC = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState<boolean>(false);

  return <Provider value={{ isCartOpen, setCartOpen }}>{children}</Provider>;
};

export default GlobalCtxProvider;
