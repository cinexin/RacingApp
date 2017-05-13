import { MYRACES } from './mocks';
import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { MyRace } from './my.race';
import 'rxjs/add/operator/map';

@Injectable()
export class RaceService {

  constructor(private http: Http) {}

  getRaces() {
    return this.http.get('app/my.races.json').
      map(response => <MyRace[]> response.json().racesData);
  }
}
