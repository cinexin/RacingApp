import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {AppRacingComponent} from './appracing.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AppRacingComponent ],
  bootstrap:    [ AppComponent, AppRacingComponent ]
})
export class AppModule { }
