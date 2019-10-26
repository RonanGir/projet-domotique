import { Injectable } from '@angular/core';
import { Appareil } from '../models/appareil';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  tv:any   = new Appareil(1, 'TV', true);
  xbox:any = new Appareil(2, 'Xbox', true);
  ps:any   = new Appareil(3, 'PlayStation4', false);
  lv:any   = new Appareil(4, 'Machine à laver', true);

  tabAppareil:any[] = [this.tv, this.xbox, this.ps, this.lv];

  constructor() { }

  getAppareilById(id: number) {
    const appareil = this.tabAppareil.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
}

  switchAllOn():void {
  	for (let a of this.tabAppareil) {
      a.status = true;
    }
  }

  switchAllOff():void {
  	for (let a of this.tabAppareil) {
      a.status = false;
    }
  }

  switchOneOn(i:number):void {
  	this.tabAppareil[i].status = true;
  }

  switchOneOff(i:number):void {
  	this.tabAppareil[i].status = false;
  }

  onDelAppareil(i:number):void {
 	  this.tabAppareil.splice(i,1);
  }

}
