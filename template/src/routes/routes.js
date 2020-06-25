import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from 'services/history';
import PrivateRoute from 'components/PrivateRoute';
import { useAuth } from 'contexts/auth';
import LoggedLayout from 'layouts/LoggedLayout';
import config from './config';

function Routes() {
  const { loading } = useAuth();

  if (loading) return null;

  return (
    <Router history={history}>
      <Switch>
        {config.public.map(({ component: Component, ...rest }, i) => (
          <Route key={i} {...rest}>
            <Component />
          </Route>
        ))}
        <LoggedLayout routes={config}>
          {config.protected.map(({ component: Component, ...rest }, i) => (
            <PrivateRoute key={i} {...rest}>
              <Component />
            </PrivateRoute>
          ))}
        </LoggedLayout>
      </Switch>
    </Router>
  );
}

export default Routes;
