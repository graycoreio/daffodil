import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCategory } from '@daffodil/category';
import { DaffModelFactory } from "@daffodil/core/testing";

const childId = faker.random.number(10000).toString();

export class MockCategory implements DaffCategory {
  id = faker.random.number(10000).toString();
  name = faker.commerce.productMaterial();
  children_count = faker.random.number(10);
  total_products = faker.random.number(10);
  productIds = [faker.random.number(100).toString()];
  children = [
    {
      id: childId,
      name: faker.commerce.productMaterial(),
      children_count: faker.random.number(10),
      total_products: faker.random.number(10),
      productIds: [faker.random.number(100).toString()],
      children: []
    }
  ];
}

@Injectable({
  providedIn: 'root'
})
export class DaffCategoryFactory extends DaffModelFactory<DaffCategory>{
  constructor(){
    super(MockCategory);
  }
}
