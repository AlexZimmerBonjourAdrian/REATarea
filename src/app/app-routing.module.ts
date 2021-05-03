import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { ComidasComponent } from './comidas/comidas.component';
import { Comidas2Component } from './comidas2/comidas2.component';
import { GatosComponent } from './gatos/gatos.component';
import { PerrosComponent } from './perros/perros.component';

const routes: Routes = [
  {
    path: 'gatos', component: GatosComponent
  },
  {
    path: 'perros', component: PerrosComponent
  },
  {
  path:'comidas', component: ComidasComponent
  },   
  
  {
    path:'',children: [
           { path:'comidas', component:ComidasComponent },  ] 
          }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
