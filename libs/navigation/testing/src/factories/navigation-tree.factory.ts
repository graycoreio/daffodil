import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffNavigationTree } from '@daffodil/navigation';

const randomUrl = () => (new URL(faker.internet.url())).pathname;

export class MockNavigationTree implements DaffNavigationTree {
  id = faker.datatype.uuid();
  name = '';
  url = randomUrl();
  total_products = faker.datatype.number({ min: 1, max: 10 });
  children = [...Array(faker.datatype.number({ min:1, max:3 }))].map(() => this.fakeTree(3));
  children_count = 0;
  breadcrumbs = [];

  private fakeTree(depth: number = 0): DaffNavigationTree {
    const children = depth !== 0
      ? [...Array(faker.datatype.number({ min:1, max:3 }))].map(() => this.fakeTree(depth - 1))
      : [];

    if (depth <= 0) {
      const id = faker.datatype.uuid();

      return {
        id,
        url: randomUrl(),
        name: faker.commerce.department(),
        total_products: faker.datatype.number({ min: 1, max: 20 }),
        children: [],
        children_count: 0,
        breadcrumbs: [{
          id,
          name: '',
          level: 1,
          url: faker.commerce.productMaterial(),
        }],
      };
    } else {
      const id = faker.datatype.uuid();

      return {
        id,
        url: randomUrl(),
        name: faker.commerce.department(),
        total_products: faker.datatype.number({ min: 1, max: 20 }),
        children,
        children_count: children.length,
        breadcrumbs: [{
          id,
          name: '',
          level: 1,
          url: faker.commerce.productMaterial(),
        }],
      };
    }
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
