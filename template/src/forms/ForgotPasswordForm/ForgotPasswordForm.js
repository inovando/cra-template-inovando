import React from 'react';
import { Form, Field } from 'react-final-form';
import createDecorator from 'final-form-focus';
import { TextField } from 'final-form-material-ui';
import Button from '@material-ui/core/Button';

import { validate } from 'utils/validate';
import { schema } from './schema';
import { Box } from '@material-ui/core';

const focusOnErrors = createDecorator();

function ForgotPasswordForm({ onSubmit }) {
  return (
    <Form
      onSubmit={onSubmit}
      decorators={[focusOnErrors]}
      validate={validate(schema)}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Field
            name="email"
            type="text"
            component={TextField}
            label="E-mail"
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

export default ForgotPasswordForm;
