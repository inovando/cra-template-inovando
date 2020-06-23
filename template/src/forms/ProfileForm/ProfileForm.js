import React from 'react';
import { Form, Field } from 'react-final-form';
import createDecorator from 'final-form-focus';
import { TextField } from 'final-form-material-ui';
import Button from '@material-ui/core/Button';

import { validate } from 'utils/validate';
import { schema } from './schema';
import { Box } from '@material-ui/core';

const focusOnErrors = createDecorator();

function ProfileForm({ onSubmit, initialValues = {} }) {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      decorators={[focusOnErrors]}
      validate={validate(schema)}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Field
            name="name"
            component={TextField}
            label="Nome"
            margin="normal"
            fullWidth
            variant="outlined"
            disabled
          />
          <Field
            name="email"
            type="email"
            component={TextField}
            label="E-mail"
            margin="normal"
            fullWidth
            variant="outlined"
            disabled
          />
          <Field
            name="password"
            type="password"
            component={TextField}
            label="Nova Senha"
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <Field
            name="newPassword"
            type="password"
            component={TextField}
            label="Confirmar Nova Senha"
            margin="normal"
            fullWidth
            variant="outlined"
          />

          <Box mt={3}>
            <Button
              disabled={submitting}
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
            >
              Enviar
            </Button>
          </Box>
        </form>
      )}
    />
  );
}

export default ProfileForm;
