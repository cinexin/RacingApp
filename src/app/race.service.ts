import { MYRACES } from './mocks';
import {Injectable} from '@angular/core';
@Injectable()
export class RaceService {
  getRaces() {
    return MYRACES;
  }
}
