import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerrosComponent } from './perros/perros.component';
import { GatosComponent } from './gatos/gatos.component';
import { ComidasComponent } from './comidas/comidas.component';
import { Comidas2Component } from './comidas2/comidas2.component';

@NgModule({
  declarations: [
    AppComponent,
    PerrosComponent,
    GatosComponent,
    ComidasComponent,
    Comidas2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
