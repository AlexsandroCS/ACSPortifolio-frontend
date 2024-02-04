import { Pipe, PipeTransform } from '@angular/core';
import { format, parseISO } from 'date-fns';

@Pipe({
  name: 'transformDate',
  standalone: true
})
export class formatterDatePipe implements PipeTransform {

  transform(date: string): string {
      const dataOriginal = parseISO(date);
      return format(dataOriginal,"dd/MM/yyyy HH:mm");
  }
}
