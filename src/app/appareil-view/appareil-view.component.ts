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

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }

}
