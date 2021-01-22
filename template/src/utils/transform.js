import { format, parseISO } from 'date-fns';
import locale from 'date-fns/locale/pt-BR';
import numeral from 'numeral';
import 'numeral/locales/pt-br';

numeral.locale('pt-br');

// "code" can be: https://date-fns.org/v2.16.1/docs/format
// example (display date & time):
// getFormattedDate(new Date().toISOString(), 'Pp')
export function getFormattedDate(date, code = 'P') {
  if (!date) return '';
  return format(parseISO(date), code, { locale });
}

export function getFormattedNumber(number, format = '0,0[.]00') {
  if (isNaN(number)) return '';
  return numeral(number || 0).format(format);
}

export function getMoney(number) {
  if (isNaN(number)) return '';
  return numeral(number || 0).format('$ 0,0[.]00');
}

export function getPercentage(number) {
  if (isNaN(number)) return '';
  return numeral((number || 0) / 100).format('0[.]00 %');
}
