import React from 'react';

import Inovando from 'images/inovando.png';
import Centered from 'components/Centered';
import LoginForm from 'forms/LoginForm';
import { Container, FormContainer } from 'styles/global';
import { useAuth } from 'contexts/auth';
import { useHistory, useLocation } from 'react-router-dom';

function Home() {
  const history = useHistory();
  const location = useLocation();
  const { signIn } = useAuth();
  const { from } = location.state || { from: { pathname: '/' } };

  const onSubmit = async values => {
    await signIn(values);
    history.replace(from);
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
