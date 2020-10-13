import React from 'react';
import ReactDOM from 'react-dom';

import 'sanitize.css';

import * as Sentry from '@sentry/browser';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (
  process.env.REACT_APP_SENTRY_DSN &&
  process.env.REACT_APP_SENTRY_ENVIRONMENT
) {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    environment: process.env.REACT_APP_SENTRY_ENVIRONMENT,
  });
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
