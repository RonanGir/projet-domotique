
import { Component, Input } from '@angular/core';
import { Appareil } from './models/appareil';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})

export class AppareilComponent implements OnInit {
  danger:string  = 'list-group-item-danger';
  success:string = 'list-group-item-success';
  textColor:string = '';

  @Input() appareilName:string;
  @Input() appareilStatus:boolean;

   getName():string{
      return this.appareilName.toUpperCase();
  }

  getColor():string {
    this.appareilStatus == true ? this.textColor = '' : this.textColor ='blue';
    return this.textColor;
  }

}
