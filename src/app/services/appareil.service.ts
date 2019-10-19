import { Injectable } from '@angular/core';
import { Appareil } from '../models/appareil';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  tv:any   = new Appareil('TV', true);
  xbox:any = new Appareil('Xbox', true);
  ps:any   = new Appareil('PlayStation4', false);
  lv:any   = new Appareil('Machine à laver', true);

  tabAppareil:any[] = [this.tv, this.xbox, this.ps, this.lv];

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
