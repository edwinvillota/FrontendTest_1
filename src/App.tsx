import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { DefaultLayout } from 'components/templates'
import { Home } from 'components/views';

import '@styles/normalize.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' >
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        </Route>
      </Switch>
    </Router>
  )
};

export default App;
