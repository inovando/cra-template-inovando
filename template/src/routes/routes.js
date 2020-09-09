import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from 'services/history';
import PrivateRoute from 'components/PrivateRoute';
import { useAuth } from 'contexts/auth';
import LoggedLayout from 'layouts/LoggedLayout';
import config from './config';
import { Box, CircularProgress } from '@material-ui/core';

function Routes() {
  const { loading = true } = useAuth();

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
          <Suspense
            fallback={
              <Box display="flex" justifyContent="center">
                <CircularProgress />
              </Box>
            }
          >
            <Switch>
              {config.protected.map(({ component: Component, ...rest }, i) => (
                <PrivateRoute key={i} {...rest}>
                  <Component />
                </PrivateRoute>
              ))}
            </Switch>
          </Suspense>
        </LoggedLayout>
      </Switch>
    </Router>
  );
}

export default Routes;
