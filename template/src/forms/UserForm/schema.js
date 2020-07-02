import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  lastname: Yup.string().required('Campo obrigatório'),
});
