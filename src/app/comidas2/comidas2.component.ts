import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comidas2',
  templateUrl: './comidas2.component.html',
  styleUrls: ['./comidas2.component.scss']
})
export class Comidas2Component implements OnInit {

  constructor() { }

  id:number= 0;
  nombre:string='';
  public titulo:string = 'Clase 7-Comidas';
  public comidas:string[]=['Pollo','Atun','Papas Fritas','spaguettis'];
  public miComidaFavorita:number=0;
  public ultimold:number=4;

  getAll()
  {
    
  }
  ngOnInit(): void {
  }

}
