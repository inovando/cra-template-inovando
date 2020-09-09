---
to: src/forms/<%= h.changeCase.pascal(name) %>Form/<%= h.changeCase.pascal(name) %>Form.js
---
import React from 'react';
import { Form, Field } from 'react-final-form';
import createDecorator from 'final-form-focus';
import { TextField } from 'final-form-material-ui';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

import { validate } from 'utils/validate';
import { schema } from './schema';

const focusOnErrors = createDecorator();

function <%= h.changeCase.pascal(name) %>Form({
  onSubmit = values => values,
  initialValues = {},
}) {
  const history = useHistory();

  return (
    <Form
      onSubmit={onSubmit}
      decorators={[focusOnErrors]}
      validate={validate(schema)}
      initialValues={initialValues}
      render={({ handleSubmit, submitting }) => {
        return (
          <form onSubmit={handleSubmit} noValidate>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Field
                  name="nome"
                  autoFocus
                  type="text"
                  component={TextField}
                  label="Nome"
                  margin="normal"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} justify="flex-end">
              <Grid item>
                <Button
                  disabled={submitting}
                  variant="outlined"
                  color="primary"
                  type="button"
                  onClick={() => history.push('/<%= h.inflection.dasherize(name) %>')}
                >
                  Voltar
                </Button>
              </Grid>
              <Grid item>
                <Button
                  disabled={submitting}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </form>
        );
      }}
    />
  );
}

export default <%= h.changeCase.pascal(name) %>Form;
