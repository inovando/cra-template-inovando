import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from 'contexts/auth';

function PrivateRoute({ children, ...rest }) {
  const { signed } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        signed ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
