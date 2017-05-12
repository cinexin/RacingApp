import {NgModule, Component } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
    <car-parts></car-parts>
    `,
})
export class AppComponent  {
  title = 'Ultra Racing!';

}
