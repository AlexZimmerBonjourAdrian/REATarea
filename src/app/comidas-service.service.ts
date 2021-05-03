import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { ComidasComponent } from './comidas/comidas.component';
import { Comidas2Component } from './comidas2/comidas2.component';

@Injectable({
  providedIn: 'root'
})
export class ComidasServiceService {
 // private comidas:ComidasComponent[]=[new this.comidas(1,'Canelones'), new this.comidas(2,'pollo al horno'),new this.comidas(3,'Hamburguesas'), new this.comidas(4,'chivito')];
  private utilmoid: number=4;


  constructor() { }

/*
public getAll():Observable<Comida[]>{

const result = new observable<Comida[]>(observable => {
  setTimeout(() => {
    observer.next(this.comidas);    
   }, 1000);   

  });
  return result;
  }
 }
 */

}