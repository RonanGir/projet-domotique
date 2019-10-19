import { Component, OnInit } from '@angular/core';
import { Appareil } from './models/appareil';
import { AppareilService } from './services/appareil.service';
import { DateFormatPipe } from './pipes/date-format.pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appareil:string   = '';
  tabAppareil:any[] = [];
  lastUpdate: Date  = new Date();

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
    let currentAppareil:any = new Appareil(this.appareil);

    if (currentAppareil.name.trim().length > 0) {
        this.appareilService.tabAppareil.push(currentAppareil);
    }

    this.appareil = '';
  }

}

