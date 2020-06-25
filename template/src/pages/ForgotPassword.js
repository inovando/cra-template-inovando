import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ForgotPasswordForm from 'forms/ForgotPasswordForm';
import { Typography, Button, Box } from '@material-ui/core';
import { FormContainer } from 'styles/global';
import Centered from 'components/Centered';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const ForgotPassword = () => {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');

  const onSubmit = async values => {
    await sleep(1000);
    setEmail(values.email);
    setSuccess(true);
  };

  if (success) {
    return (
      <Centered column>
        <FormContainer>
          <Typography align="center">{email}</Typography>
          <Typography align="center">
            E-mail enviado para alteração de senha!
          </Typography>
          <Box mt={3}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/"
            >
              Voltar para login
            </Button>
          </Box>
        </FormContainer>
      </Centered>
    );
  }

  return (
    <Centered column>
      <Typography variant="h6" mb={2} align="center">
        Esqueci minha senha
      </Typography>
      <FormContainer>
        <ForgotPasswordForm onSubmit={onSubmit} />
      </FormContainer>
    </Centered>
  );
};

export default ForgotPassword;
