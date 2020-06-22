import React from 'react';
import history from 'services/history';

import Inovando from 'images/inovando.png';
import Centered from 'components/Centered';
import LoginForm from 'forms/LoginForm';
import { Container, FormContainer } from 'styles/global';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function Home() {
  const onSubmit = async () => {
    await sleep(1000);
    history.push('Dashboard');
  };

  return (
    <Container>
      <Centered column>
        <img
          style={{ width: 200, marginBottom: 20 }}
          src={Inovando}
          alt="Inovando's Logo"
        />
        <FormContainer>
          <LoginForm onSubmit={onSubmit} />
        </FormContainer>
      </Centered>
    </Container>
  );
}

export default Home;
