import { setupYup } from 'config/yup';

const Yup = setupYup();

export const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  lastname: Yup.string().required('Campo obrigatório'),
});
