import { Component } from '@angular/core';
import { Appareil } from './models/appareil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appareil:string = '';

  tv:object   = new Appareil('TV', true);
  xbox:object = new Appareil('Xbox', true);
  ps:object   = new Appareil('PlayStation4', false);
  lv:object   = new Appareil('Machine à laver', true);

  tabAppareil:object[] = [this.tv, this.xbox, this.ps, this.lv];

  onAllumer():void {
    for (let a of this.tabAppareil) {
      a.status = true;
    }
  }

  onEteindre():void {
    for (let a of this.tabAppareil) {
      a.status = false;
    }
  }

  addAppareil():void {
    let appareil:object = new Appareil(this.appareil);

    if (appareil.name.trim().length > 0) {
        this.tabAppareil.push(appareil);
    }

    this.appareil = '';
  }
}

