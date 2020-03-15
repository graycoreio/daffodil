import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCategory } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCategory implements DaffCategory {
  id = faker.random.number(10000).toString();
	name = faker.commerce.productMaterial();
	description = faker.random.words(Math.floor(Math.random() * 20));
  breadcrumbs = [{
    categoryId: faker.random.number(100),
    categoryName: faker.commerce.productMaterial(),
    categoryLevel: faker.random.number(5),
    categoryUrlKey: faker.commerce.productMaterial()
  }]
  children_count = faker.random.number(10);
  total_products = 1;
  product_ids = [faker.random.number(100).toString()];
}

@Injectable({
  providedIn: 'root'
})
export class DaffCategoryFactory extends DaffModelFactory<DaffCategory>{
  constructor(){
    super(MockCategory);
  }
}
