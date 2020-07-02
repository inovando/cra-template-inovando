import React from 'react';
import { toast } from 'react-toastify';
import ProfileForm from 'forms/ProfileForm';
import { FormContainer } from 'styles/global';
import { useAuth } from 'contexts/auth';
import { Container } from '@material-ui/core';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function Profile() {
  const { user } = useAuth();

  const onSubmit = async (values, form) => {
    document.activeElement.blur();
    await sleep(1000);
    setTimeout(form.restart);
    toast.success('Senha alterada com sucesso!');
  };

  return (
    <Container>
      <FormContainer>
        <ProfileForm initialValues={user} onSubmit={onSubmit} />
      </FormContainer>
    </Container>
  );
}

export default Profile;
