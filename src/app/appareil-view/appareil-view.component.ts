import { Component, OnInit, OnDestroy } from '@angular/core';
import { Appareil } from '../models/appareil';
import { AppareilService } from '../services/appareil.service';
import { DateFormatPipe } from '../pipes/date-format.pipe';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  appareils: any[];
  appareilSubscription: Subscription;

  isAuth: boolean    = false;
  appareil: string   = '';
  tabAppareil: any[] = [];
  lastUpdate: Date   = new Date();

  constructor(public appareilService: AppareilService) {

  }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.tabAppareil = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
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

    ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }

}
