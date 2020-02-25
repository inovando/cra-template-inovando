import * as Yup from 'yup';

export const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
});
