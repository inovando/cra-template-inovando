/* eslint-disable no-template-curly-in-string */
import * as Yup from 'yup';

export function setupYup() {
  Yup.setLocale({
    string: {
      email: 'E-mail inválido',
      max: 'Campo deve conter no máximo ${max} caracteres',
      min: 'Campo deve conter no mínimo ${min} caracteres',
    },
    number: {
      max: 'Campo deve ser menor ou igual a ${max}',
      min: 'Campo deve ser maior ou igual a ${min}',
    },
    mixed: {
      required: 'Campo obrigatório',
      notType: 'Campo inválido',
    },
  });

  return Yup;
}
