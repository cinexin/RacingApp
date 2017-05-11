import {NgModule, Component } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@Component({
    selector: 'racing-app',
    template: `<h1>{{heading}}</h1>
    <h2>{{race.name}}</h2>
    <p>{{race.date}}</p>
    <p>{{race.about}}</p>`
})
export class AppRacingComponent {
  heading = 'Ultra Racing Schedule';
  race = {
    "id": 1,
    "name":"Daytona Thunderdome",
    "date":new Date('2512-01-04T14:00:00'),
    "about":"Race through the ruins of an ancient Florida battle arena.",
    "entryFee":3200
  };
}
