import React from 'react';
import { Form, Field } from 'react-final-form';
import createDecorator from 'final-form-focus';

import { validate } from 'utils/validate';
import { schema } from './schema';

const focusOnErrors = createDecorator();

const Error = ({ name }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
);

function LoginForm({ onSubmit }) {
  return (
    <Form
      onSubmit={onSubmit}
      decorators={[focusOnErrors]}
      validate={validate(schema)}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <Field name="email" type="email" component="input" />
            <Error name="email" />
          </div>
          <div>
            <Field name="password" type="password" component="input" />
            <Error name="password" />
          </div>

          <button type="submit">enviar</button>
        </form>
      )}
    />
  );
}

export default LoginForm;
