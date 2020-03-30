import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffSpecificNavigationTree } from '@daffodil/navigation';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockNavigationTree implements DaffSpecificNavigationTree {
  id = '1';
  name = '';
  path = faker.commerce.department().toString().toLowerCase();
  total_products = faker.random.number(10);
  children = [...Array(faker.random.number({min:1, max:3}))].map(() => this.fakeTree(3));
  children_count = 0;

  private fakeTree(depth: number = 0): DaffSpecificNavigationTree {
    const children = depth !== 0 
      ? [...Array(faker.random.number({min:1, max:3}))].map(() => this.fakeTree(depth - 1))
      : [];

    return depth <= 0 
      ? {
        id: faker.random.number({min:1, max:10000}).toString(),
        name: faker.commerce.department(),
        path: faker.commerce.department().toString().toLowerCase(),
        total_products: faker.random.number(20),
        children: [],
        children_count: 0
      }
      : {
        id: faker.random.number({min:1, max:10000}).toString(),
        name: faker.commerce.department(),
        path: faker.commerce.department().toString().toLowerCase(),
        total_products: faker.random.number(20),
        children: children,
        children_count: children.length
      }
  }
}

@Injectable({
  providedIn: 'root'
})
export class DaffNavigationTreeFactory extends DaffModelFactory<DaffSpecificNavigationTree>{
  constructor(){
    super(MockNavigationTree);
  }
}
