import { Component, OnInit } from '@angular/core';
import { Appareil } from './models/appareil';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appareil:string = '';
  tabAppareil:object[] = [];

  constructor(public appareilService:AppareilService) {

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
    let currentAppareil:object = new Appareil(this.appareil);
    console.log(currentAppareil);

    if (currentAppareil.name.trim().length > 0) {
        this.appareilService.tabAppareil.push(currentAppareil);
    }

    this.appareil = '';
  }

}

