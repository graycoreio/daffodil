import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { Product } from '../../model/product';

@Injectable()
export class ProductFactory {
  
  create() : Product {
    return {...new MockProductShortNames()};
  }

  createStyleTestingList() : Product[] {
    return [
      new MockProductDefinedId(),
      new MockProductShortNames(),
      new MockProductLongNames(),
      new MockProductLongNames(),
      new MockProductShortNames(),
      new MockProductShortNames(),
      new MockProductLongNames(),
      new MockProductLongNames(),
      new MockProductShortNames()
    ]
  }
}

export class MockProductShortNames implements Product {
  cost = faker.random.number(10000).toString();
  id = faker.random.number(1000).toString();
  name = 'Product Name';
  brand = 'Product Brand';
};

export class MockProductDefinedId implements Product {
  cost = faker.random.number(10000).toString();
  id = "1001";
  name = 'Product Name';
  brand = 'Product Brand';
};

export class MockProductLongNames implements Product {
  cost = faker.random.number(10000).toString();
  id = faker.random.number(1000).toString();
  name = 'A Longer Product Name';
  brand = 'A Longer Product Brand';
};
