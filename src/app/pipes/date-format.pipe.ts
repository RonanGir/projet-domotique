import { Constants } from './../util/constants';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe extends DatePipe implements PipeTransform {
  transform(date: Date, args?: any): string {
    return super.transform(date, Constants.DATE_FMT);
  }
}
