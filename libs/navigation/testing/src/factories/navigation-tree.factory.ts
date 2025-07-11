import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffNavigationTree } from '@daffodil/navigation';


const randomUrl = () => (new URL(faker.internet.url())).pathname;

export class MockNavigationTree implements DaffNavigationTree {
  id = faker.string.uuid();
  name = faker.commerce.department();
  url = randomUrl();
  total_products = faker.number.int({ min: 1, max: 10 });
  breadcrumbs = [{
    id: faker.string.uuid(),
    name: '',
    level: 1,
    url: faker.commerce.productMaterial(),
  }];

  children_count: DaffNavigationTree['children_count'];
  children: DaffNavigationTree['children'];

  constructor(
    depth: number = 3,
  ) {
    this.children = depth <= 0 ? [] : [...Array(faker.number.int({ min:1, max:3 }))].map(() => new MockNavigationTree(depth - 1));
    this.children_count = this.children.length;
  }
}

@Injectable({
  providedIn: 'root',
})
export class DaffNavigationTreeFactory extends DaffModelFactory<DaffNavigationTree, typeof MockNavigationTree>{
  constructor(){
    super(MockNavigationTree);
  }
}
