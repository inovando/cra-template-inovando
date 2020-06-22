import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import GlobalStyle from 'styles/global';
import theme from 'config/theme';
import Routes from 'routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
