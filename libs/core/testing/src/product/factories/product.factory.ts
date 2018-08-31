import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { DaffCoreTestingModule } from '../../testing.module';
import { Product } from '@daffodil/core';


@Injectable({
  providedIn: 'root'
})
export class ProductFactory {

  static readonly PRODUCT_DETAILS = 'Lorem ipsum dolor sit amet, accumsan ullamcorper ei eam. Sint appetere ocurreret no per, et cum lorem disputationi. Sit ut magna delenit, assum vidisse vocibus sed ut. In aperiri malorum accusamus sea, novum mediocritatem ius at. Duo agam probo honestatis ut. Nec regione splendide cu, unum graeco vivendum in duo.';
  
  create() : Product {
    return {...new MockProductShortNames()};
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
  price = faker.random.number(10000).toString();
  id = faker.random.number(1000).toString();
  name = 'Product Name';
  brand = 'Product Brand';
  description  = ProductFactory.PRODUCT_DETAILS;
};

export class MockProductDefinedId implements Product {
  price = faker.random.number(10000).toString();
  id = "1001";
  name = 'Product Name';
  brand = 'Product Brand';
  description  = ProductFactory.PRODUCT_DETAILS;
};

export class MockProductLongNames implements Product {
  price = faker.random.number(10000).toString();
  id = faker.random.number(1000).toString();
  name = 'A Longer Product Name';
  brand = 'A Longer Product Brand';
  description  = ProductFactory.PRODUCT_DETAILS;
};
