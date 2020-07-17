import {format} from 'date-fns';
import pt from 'date-fns/locale/pt';

export function formatDate(date: Date, formatStr: string) {
  return format(date, formatStr, {
    locale: pt,
  });
}

export function firstLetterToUpperCase(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
