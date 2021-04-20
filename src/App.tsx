import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DefaultLayout } from 'components/templates';

// Context
import { GlobalCtxProvider, ProductCtxProvider, CartCtxProvider } from 'context';

// Views
import { Home } from 'components/views';

import '@styles/normalize.scss';

const App: React.FC = () => {
  return (
    <GlobalCtxProvider>
      <ProductCtxProvider>
        <CartCtxProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <DefaultLayout>
                  <Home />
                </DefaultLayout>
              </Route>
            </Switch>
          </Router>
        </CartCtxProvider>
      </ProductCtxProvider>
    </GlobalCtxProvider>
  );
};

export default App;
