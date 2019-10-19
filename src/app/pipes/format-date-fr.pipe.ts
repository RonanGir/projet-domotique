import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from './../util/constants';

@Pipe({
  name: 'formatDateFr'
})
export class FormatDateFrPipe implements PipeTransform {

  transform(date: Date, args?: any[]): any {
    return formatDate(date, 'MMMM', Constants.formatDateFr)
  }

}
