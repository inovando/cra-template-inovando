---
to: src/forms/<%= h.changeCase.pascal(name) %>Form/schema.js
---
import { setupYup } from 'config/yup';

const Yup = setupYup();

export const schema = Yup.object().shape({
  nome: Yup.string().required(),
});
