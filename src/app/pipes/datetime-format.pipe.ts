import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Constants } from './../util/constants';

@Pipe({
  name: 'datetimeFormat'
})

export class DatetimeFormatPipe extends DatePipe implements PipeTransform {

  transform(date: Date, args?: any): string {
    return super.transform(date, Constants.DATE_TIME_FMT);
  }

}
