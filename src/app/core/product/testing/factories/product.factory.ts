import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { Product } from '@core/product/model/product';

@Injectable()
export class ProductFactory {
  
  create(cost: string) : Product {
    return new MockProduct();
  }
}

export class MockProduct implements Product {

  cost: string = faker.random.number(10000).toString();
  id: string = faker.random.number(1000).toString();
};
