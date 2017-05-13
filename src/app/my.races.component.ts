import {NgModule, Component } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MyRace} from './my.race';
import {MYRACES} from './mocks';
import {RaceService} from './race.service';

@Component({
  selector: 'my-races',
  templateUrl: 'app/my.races.component.html',
  styleUrls: ['app/my.races.component.css']
})

export class MyRacesComponent {
  races: MyRace[] ;
  cash = 10000;
  constructor(private raceService:RaceService) {
    // this.races = MYRACES;
    this.raceService.getRaces().subscribe(races => this.races = races);
  }

  totalCost() {
    let cost = 0;
    if (Array.isArray(this.races)) {
      for (let race of this.races) {
        if (race.isRacing === true) {
            cost += race.entryFee;
        }
      }
    }
    return cost;
  }

  cancelRace(race:MyRace) {
    race.isRacing = false;
  }

  cashLeft() {
    return this.cash - this.totalCost();
  }

  enterRace(race:MyRace) {
    if (this.cashLeft() > race.entryFee) {
      race.isRacing = true;
    } else {
      alert("You don't have enough cash");
    }
  }
}
