import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import GlobalStyle from 'styles/global';
import theme from 'config/theme';
import Routes from 'routes';
import { AuthProvider } from 'contexts/auth';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
