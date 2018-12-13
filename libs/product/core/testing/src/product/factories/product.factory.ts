import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { Product } from '@daffodil/productCore';

@Injectable({
  providedIn: 'root'
})
export class DaffProductFactory {

  static readonly PRODUCT_DETAILS = 'Lorem ipsum dolor sit amet, accumsan ullamcorper ei eam. Sint appetere ocurreret no per, et cum lorem disputationi. Sit ut magna delenit, assum vidisse vocibus sed ut. In aperiri malorum accusamus sea, novum mediocritatem ius at. Duo agam probo honestatis ut. Nec regione splendide cu, unum graeco vivendum in duo.';
  
  create() : Product {
    return {...new MockProductShortNames(null)};
  }

  /**
   * Create a fixed length array of products
   * @param qty 
   */
  createMany(qty: number = 1): Product[] {
    return new Array(qty).map(() => {
      return this.create();
    });
  }

  createStyleTestingList() : Product[] {
    return [
      new MockProductShortNames('1001'),
      new MockProductLongNames('1002'),
      new MockProductShortNames('1003'),
      new MockProductLongNames('1004'),
      new MockProductShortNames('1005'),
      new MockProductLongNames('1006'),
      new MockProductLongNames('1007'),
      new MockProductShortNames('1008'),
      new MockProductShortNames('1009')
    ]
  }
}

export class MockProductShortNames implements Product {
  price: string;
  id: string;
  name: string;
  brand: string;
  description: string;
  
  constructor(id: string) {
    this.price = faker.random.number(10000).toString();
    this.id = id ? id : faker.random.number(10000).toString();
    this.name = 'Product Name';
    this.brand = 'Product Brand';
    this.description  = DaffProductFactory.PRODUCT_DETAILS;
  }
};

export class MockProductLongNames implements Product {
  price: string;
  id: string;
  name: string;
  brand: string;
  description: string;
  
  constructor(id: string) {
    this.price = faker.random.number(10000).toString();
    this.id = id ? id : faker.random.number(10000).toString();
    this.name = 'A Longer Product Name';
    this.brand = 'A Longer Product Brand';
    this.description  = DaffProductFactory.PRODUCT_DETAILS;
  }
};
