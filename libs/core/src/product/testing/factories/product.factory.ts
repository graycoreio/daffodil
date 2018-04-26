import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { Product } from '../../model/product';

@Injectable()
export class ProductFactory {
  
  create() : Product {
    return {...new MockProduct()};
  }
}

export class MockProduct implements Product {
  cost = faker.random.number(10000).toString();
  id = faker.random.number(1000).toString();
};
