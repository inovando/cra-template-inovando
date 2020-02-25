import React from 'react';
import Button from '@material-ui/core/Button';
import history from 'services/history';

import Inovando from 'images/inovando.png';
import Centered from 'components/Centered';

function Home() {
  return (
    <Centered column>
      <img src={Inovando} alt="Inovando's Logo" />
      <div>A template by @inovando</div>
      <Button
        style={{ marginTop: 10 }}
        variant="contained"
        onClick={() => history.push('/dashboard')}
      >
        Go to Dashboard
      </Button>
    </Centered>
  );
}

export default Home;
