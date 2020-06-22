import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';
import history from 'services/history';
import PrivateRoute from 'components/PrivateRoute';
import { useAuth } from 'contexts/auth';

function Routes() {
  const { loading } = useAuth();

  if (loading) return null;

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login">
          <Home />
        </Route>
        <PrivateRoute exact path="/">
          <Dashboard />
        </PrivateRoute>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
