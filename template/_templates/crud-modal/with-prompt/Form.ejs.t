---
to: src/forms/<%= h.changeCase.pascal(name) %>Form/<%= h.changeCase.pascal(name) %>Form.js
---
import React from 'react';
import { Form, Field } from 'react-final-form';
import createDecorator from 'final-form-focus';
import { TextField } from 'final-form-material-ui';

import { validate } from 'utils/validate';
import { schema } from './schema';

const focusOnErrors = createDecorator();

function <%= h.changeCase.pascal(name) %>Form({
  onSubmit = values => values,
  footer = () => {},
  initialValues = {},
}) {
  return (
    <Form
      onSubmit={onSubmit}
      decorators={[focusOnErrors]}
      validate={validate(schema)}
      initialValues={initialValues}
      render={props => {
        const { handleSubmit } = props;
        return (
          <form onSubmit={handleSubmit} noValidate>
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
            {footer(props)}
          </form>
        );
      }}
    />
  );
}

export default <%= h.changeCase.pascal(name) %>Form;
