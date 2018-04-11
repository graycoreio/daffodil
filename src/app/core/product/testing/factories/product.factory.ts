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
  
  constructor(givenCost:string) {
    this.cost = givenCost;
  }
};
