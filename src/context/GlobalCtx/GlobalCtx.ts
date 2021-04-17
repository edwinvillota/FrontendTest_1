import React from 'react';

interface IGlobalCtx {
  isCartOpen: boolean;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalCtx = React.createContext({} as IGlobalCtx);

export default GlobalCtx;
