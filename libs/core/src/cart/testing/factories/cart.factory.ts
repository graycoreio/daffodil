import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { Cart } from '../../model/cart';

@Injectable()
export class CartFactory {
  
  create() : Cart {
    return {...new MockCart()};
  }
}

export class MockCart implements Cart {
  id = faker.random.number(1000).toString();
};
