import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffModelFactory } from "@daffodil/core/testing";

export class MockNavigationTree implements DaffNavigationTree {
  private fakeTree(depth: number = 0): DaffNavigationTree {
    let children = [];
    if(depth != 0){
      children = [...Array(faker.random.number({min:1, max:3}))].map(() => this.fakeTree(depth - 1))
    }
    return depth <= 0 
      ? {
        id: faker.random.number({min:1, max:10000}).toString(),
        name: faker.commerce.department(),
        total_products: faker.random.number(20),
        children: [],
        children_count: 0
      }
      : {
        id: faker.random.number({min:1, max:10000}).toString(),
        name: faker.commerce.department(),
        total_products: faker.random.number(20),
        children: children,
        children_count: children.length
      }
  }
  
  id = '1';
  name = '';
  total_products = faker.random.number(10);
  children = [...Array(faker.random.number({min:1, max:3}))].map(() => this.fakeTree(3));
  children_count = 0;
}

@Injectable({
  providedIn: 'root'
})
export class DaffNavigationTreeFactory extends DaffModelFactory<DaffNavigationTree>{
  constructor(){
    super(MockNavigationTree);
  }
}
