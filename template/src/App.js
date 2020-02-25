import React from 'react';

import GlobalStyle from 'styles/global';
import Centered from 'components/Centered';
import Inovando from 'images/inovando.png';

function App() {
  return (
    <Centered column>
      <img src={Inovando} alt="Inovando's Logo" />
      A template by @inovando
      <GlobalStyle />
    </Centered>
  );
}

export default App;
