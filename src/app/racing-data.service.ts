/*
  Service Module for data access
*/

import {CARPARTS} from './mocks';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {CarPart} from './car-part';

/* mmmm...sooooo similar to Java */
@Injectable()
export class RacingDataService {
  constructor(private http : Http) {}
  getCarParts() {
    /* return CARPARTS; */
    return this.http.get('app/car-parts.json')
      .map(response => <CarPart[]> response.json().data );

  }
}
