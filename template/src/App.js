import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';

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
        <ToastContainer autoClose={3000} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
