import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Chart01Component } from './chart01/chart01.component';
import 'grid-layout-wc/grid-layout-wc.js';
import { Chart02Component } from './chart02/chart02.component';
import { Chart03Component } from './chart03/chart03.component';
import { Chart04Component } from './chart04/chart04.component';
import { Chart05Component } from './chart05/chart05.component';
@NgModule({
  declarations: [
    AppComponent,
    Chart01Component,
    Chart02Component,
    Chart03Component,
    Chart04Component,
    Chart05Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
