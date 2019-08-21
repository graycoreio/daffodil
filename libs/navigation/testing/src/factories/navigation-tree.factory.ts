import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffModelFactory } from "@daffodil/core/testing";

export class MockNavigationTree implements DaffNavigationTree {
  id = faker.random.number(10000).toString();
  name = faker.commerce.productMaterial();
  children_count = faker.random.number(10);
  total_products = faker.random.number(10);
  children = [
    {
      id: faker.random.number(10000).toString(),
      name: faker.commerce.productMaterial(),
      children_count: faker.random.number(10),
      total_products: faker.random.number(10)
    }
  ]
}

@Injectable({
  providedIn: 'root'
})
export class DaffNavigationTreeFactory extends DaffModelFactory<DaffNavigationTree>{
  constructor(){
    super(MockNavigationTree);
  }
}
