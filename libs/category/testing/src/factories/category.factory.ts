import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCategory } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCategory implements DaffCategory {
  id = faker.random.number({min: 1, max: 10000}).toString();
	name = faker.commerce.productMaterial();
	description = faker.random.words(Math.floor(Math.random() * 20));
  breadcrumbs = [{
    categoryId: faker.random.number({min: 1, max: 100}),
    categoryName: faker.commerce.productMaterial(),
    categoryLevel: faker.random.number({min: 1, max: 5}),
    categoryUrlKey: faker.commerce.productMaterial()
  }]
  children_count = faker.random.number({min: 1, max: 10});
  total_products = 1;
  product_ids = [faker.random.number({min: 1, max: 100}).toString()];
}

@Injectable({
  providedIn: 'root'
})
export class DaffCategoryFactory extends DaffModelFactory<DaffCategory>{
  constructor(){
    super(MockCategory);
  }
}
