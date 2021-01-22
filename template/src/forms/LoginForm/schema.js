import { setupYup } from 'config/yup';
// import { validateBr } from 'js-brasil';

const Yup = setupYup();

export const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
  // cpf: Yup.string()
  //   .required()
  //   .test('cpf', 'CPF inválido', function(value) {
  //     if (!value) return;
  //     return validateBr.cpf(value);
  //   }),
});
