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
