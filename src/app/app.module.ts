import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {AppRacingComponent} from './appracing.component';
import {CarPartsComponent} from './car-parts.component';
import {MyRacesComponent} from './my.races.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AppRacingComponent, CarPartsComponent, MyRacesComponent ],
  bootstrap:    [ AppComponent, AppRacingComponent, CarPartsComponent, MyRacesComponent ]
})
export class AppModule { }
