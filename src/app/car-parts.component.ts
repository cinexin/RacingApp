
import {Component} from '@angular/core';
import {CarPart} from './car-part';
import {CARPARTS} from './mocks';
import {RacingDataService} from './racing-data.service';


@Component({
  selector: 'car-parts',
  templateUrl: 'app/car-parts.component.html',
  styleUrls:['app/car-parts.component.css']
})

export class CarPartsComponent{
  carParts: CarPart[] ;
  /* that's how we inject dependencies */
  /* private keyword means it will automatically defines
  Component properties based on parameters.
  In this case: racingDataService of class RacingDataService */
  constructor(private racingDataService: RacingDataService) {
    racingDataService.getCarParts().subscribe(carParts => this.carParts = carParts);
  }
  totalCarParts() {
    let sum = 0;
    if (Array.isArray(this.carParts)) {
        for (let carPart of this.carParts) {
          sum+=carPart.inStock;
        }
        return sum;
    }
  }

  upQuantity(carPart:CarPart) {
    if (carPart.quantity < carPart.inStock) {
      carPart.quantity++;
    }
  }

  downQuantity(carPart:CarPart) {
    if (carPart.quantity>0) {
      carPart.quantity--;
    }
  }

}
