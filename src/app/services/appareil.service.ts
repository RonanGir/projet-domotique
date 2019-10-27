import { Injectable } from '@angular/core';
import { Appareil } from '../models/appareil';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  tv:any           = new Appareil(1, 'TV', true);
  xbox:any         = new Appareil(2, 'Xbox', true);
  ps:any           = new Appareil(3, 'PlayStation4', false);
  lv:any           = new Appareil(4, 'Machine à laver', true);

  appareilsSubject = new Subject<any[]>();

  private tabAppareil:any[] = [this.tv, this.xbox, this.ps, this.lv];

  constructor() { }

  emitAppareilSubject() {
    this.appareilsSubject.next(this.tabAppareil.slice());
  }


  getAppareilById(id: number) {
    const appareil = this.tabAppareil.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
}

  switchAllOn():void {
  	for (let a of this.tabAppareil) {
      a.status = true;
    }
    this.emitAppareilSubject();
  }

  switchAllOff():void {
  	for (let a of this.tabAppareil) {
      a.status = false;
    }
    this.emitAppareilSubject();
  }

  switchOneOn(i:number):void {
  	this.tabAppareil[i].status = true;
    this.emitAppareilSubject();
  }

  switchOneOff(i:number):void {
  	this.tabAppareil[i].status = false;
    this.emitAppareilSubject();
  }

  onDelAppareil(i:number):void {
 	  this.tabAppareil.splice(i,1);
    this.emitAppareilSubject();
  }

  addAppareil(name: string, status: boolean): void {
    let id: number = this.tabAppareil.length + 1 ;
    let currentAppareil: any = new Appareil(id, name, status);

    if (currentAppareil.name.trim().length > 0) {
        this.tabAppareil.push(currentAppareil);
    }

    this.emitAppareilSubject();
  }

}
