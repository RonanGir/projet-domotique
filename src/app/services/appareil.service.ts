import { Injectable } from '@angular/core';
import { Appareil } from '../models/appareil';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  private tabAppareil: any[];
  appareilsSubject = new Subject<any[]>();

  constructor(private httpClient: HttpClient) { }

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
    this.saveAppareilsToServer();
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


  saveAppareilsToServer() {
    this.httpClient
      .put('https://projet-domotique-b3c99.firebaseio.com/appareils.json', this.tabAppareil)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getAppareilsFromServer() {
    this.httpClient
      .get<any[]>('https://projet-domotique-b3c99.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          console.log(response);
          this.tabAppareil = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

}
