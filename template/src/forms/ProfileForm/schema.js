import { setupYup } from 'config/yup';

const Yup = setupYup();

export const schema = Yup.object().shape({
  password: Yup.string().required('Campo obrigatório'),
  newPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Senhas devem ser iguais',
  ),
});
