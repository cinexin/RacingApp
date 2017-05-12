import {NgModule, Component } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MyRace} from './my.race';
import {MYRACES} from './mocks';

@Component({
  selector: 'my-races',
  templateUrl: 'app/my.races.component.html',
  styleUrls: ['app/my.races.component.css']
})

export class MyRacesComponent {
  races: MyRace[] ;
  constructor() {
    this.races = MYRACES;
  }
  totalCost() {
    let cost = 0;
    for (let race of this.races) {
      if (race.isRacing === true) {
          cost += race.entryFee;
      }
    }
    return cost;
  }
}
