// Reference: https://gist.github.com/manzoorwanijk/5993a520f2ac7890c3b46f70f6818e0a

import { setIn } from 'final-form';

export const validate = validationSchema => async values => {
  try {
    await validationSchema.validate(values, { abortEarly: false });
  } catch (err) {
    const errors = err.inner.reduce((formError, innerError) => {
      return setIn(formError, innerError.path, innerError.message);
    }, {});

    return errors;
  }
};
