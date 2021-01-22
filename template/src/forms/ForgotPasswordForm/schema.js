import { setupYup } from 'config/yup';

const Yup = setupYup();

export const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
});
