import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from './../util/constants';

@Pipe({
  name: 'formatDateFr'
})
export class FormatDateFrPipe implements PipeTransform {

  transform(value: any, format: string): any {

    //return formatDate(value, Constants.DATE_TIME_FMT, Constants.FORMAT_FR )
  }

}
