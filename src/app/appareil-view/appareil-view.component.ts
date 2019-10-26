import { Component, OnInit } from '@angular/core';
import { Appareil } from '../models/appareil';
import { AppareilService } from '../services/appareil.service';
import { DateFormatPipe } from '../pipes/date-format.pipe';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth: boolean    = false;
  appareil: string   = '';
  tabAppareil: any[] = [];
  lastUpdate: Date   = new Date();

  constructor(public appareilService: AppareilService) {

  }

  ngOnInit() {
    this.tabAppareil = this.appareilService.tabAppareil;
  }

  onAllumer():void {
    this.appareilService.switchAllOn();
  }

  onEteindre():void {
    this.appareilService.switchAllOff();
  }

  addAppareil():void {
    let number: number = Math.floor(Math.random() * 100);
    let currentAppareil:any = new Appareil(number,this.appareil);

    if (currentAppareil.name.trim().length > 0) {
        this.appareilService.tabAppareil.push(currentAppareil);
    }

    this.appareil = '';
  }

}
