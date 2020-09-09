import formatString from 'format-string-by-pattern';

/**
 * Example Usage:
 *
 * <Field
 *    name="cpf"
 *    {...format('XXX.XXX.XXX-XX')}
 *    component="input"
 *  />
 * @param {String} mask
 */
export const format = mask => {
  return {
    format: value => {
      if (!value) return '';
      return formatString(mask, value);
    },
    parse: fieldValue => fieldValue.replace(/[^\d]/g, ''),
  };
};

/**
 * Example Usage (Final Form 'onSubmit' prop):
 *
 * const onSubmit = async values => {
 *   try {
 *     await api.post('endpoint', values);
 *   } catch (error) {
 *     return errorValidatorBack(error);
 *   }
 * }
 * @param {String} mask
 */
export const errorValidatorBack = error => {
  if (
    error?.response?.status === 422 &&
    error?.response?.data?.error &&
    Array.isArray(error.response.data.error)
  ) {
    const formErrors = {};

    error.response.data.error.forEach(item => {
      formErrors[item.field] = item.message;
    });

    return formErrors;
  }
};
