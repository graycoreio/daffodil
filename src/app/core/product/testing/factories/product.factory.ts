import { Injectable } from '@angular/core';

import { Product } from '@core/product/model/product';

@Injectable()
export class ProductFactory {
  
  create(cost: string) : Product {
    return new MockProduct(cost);
  }
}

export class MockProduct implements Product {

  cost: string;
  id: string = Math.floor(Math.random()*1000).toString();
  
  constructor(givenCost:string) {
    this.cost = givenCost;
  }
};
