import {NgModule, Component } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'my-races',
  templateUrl: 'app/my.races.component.html',
  styleUrls: ['app/my.races.component.css']
})

export class MyRacesComponent {
  races = [{
    "id": 1,
    "name": "Daytona Thunderdome",
    "date": new Date('2512-01-04T14:00:00'),
    "about": "Race through the ruins of an ancient Florida battle arena.",
    "entryFee": 3200,
    "isRacing": false
  }, {
    "id": 2,
    "name": "San Francisco Ruins",
    "date": new Date('2512-07-03T20:00:00'),
    "about": "Drift down the streets of a city almost sunk under the ocean.",
    "entryFee": 4700,
    "isRacing": true
  }, {
    "id": 3,
    "name": "New York City Skyline",
    "date": new Date('2512-07-12T21:00:00'),
    "about": "Fly between buildings in the electronic sky.",
    "entryFee": 4300,
    "isRacing": false
  }];

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
