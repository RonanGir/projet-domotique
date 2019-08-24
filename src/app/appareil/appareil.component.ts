import { Component, OnInit, Input } from '@angular/core';
import { Appareil } from '../models/appareil';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

	@Input() appareilName:string;
	@Input() appareilStatus:string;
  @Input() appareilIndex:number;

	constructor(public appareilService:AppareilService) { }

	ngOnInit() {
	}

  getName(){
  	return this.appareilName.toUpperCase();
 	}

  DelAppareil() {
    this.appareilService.onDelAppareil(this.appareilIndex);
  }

  getColor():string {
    return this.appareilStatus ? '' : 'blue';
  }

  powerOn() {
    this.appareilService.switchOneOn(this.appareilIndex);
  }

  powerOff() {
    this.appareilService.switchOneOff(this.appareilIndex);
  }

}
