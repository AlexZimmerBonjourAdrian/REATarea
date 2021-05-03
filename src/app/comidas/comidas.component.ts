import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.scss']
})
export class ComidasComponent implements OnInit {

  constructor() { }

public titulo:string = 'Clase 7-Comidas';
public comidas:string[]=['Canelones','Pollo al Horno','Hamburguesa','Chivito'];
public miComidaFavorita:number=0;

  ngOnInit(): void {
  }

}
