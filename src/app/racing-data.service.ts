/*
  Service Module for data access
*/

import {CARPARTS} from './mocks';
import {Injectable} from '@angular/core';

/* mmmm...sooooo similar to Java */
@Injectable()
export class RacingDataService {
  getCarParts() {
    return CARPARTS;
  }
}
