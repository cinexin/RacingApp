import {Component} from '@angular/core';

@Component({
  selector: 'car-parts',
  templateUrl: 'app/car-parts.component.html',
  styleUrls:['app/car-parts.component.css']
})

export class CarPartsComponent{
  carParts = [
    {
      "id":1,
      "name":"Super Tires",
      "description":"These tires are the very best",
      "inStock":5,
      "price":4.99
    },
    {
      "id":2,
      "name":"Reinforced Shocks",
      "description":"Shocks made from kryptonite",
      "inStock":7,
      "price":9.99
    }
  ];
  totalCarParts() {
    let sum = 0;
    for (let carPart of this.carParts) {
      sum+=carPart.inStock;
    }
    return sum;
  }

}
