import { Injectable } from '@angular/core';
import { Appareil } from '../models/appareil';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  tv:object   = new Appareil('TV', true);
  xbox:object = new Appareil('Xbox', true);
  ps:object   = new Appareil('PlayStation4', false);
  lv:object   = new Appareil('Machine à laver', true);

  tabAppareil:object[] = [this.tv, this.xbox, this.ps, this.lv];

  constructor() { }

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
