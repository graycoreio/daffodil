import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffCategory } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCategory implements DaffCategory {
  id = faker.datatype.uuid();
  url = `/${faker.internet.domainWord()}.html`;
  canonicalUrl = faker.internet.url();
  name = faker.commerce.productMaterial();
  description = faker.random.words(Math.floor(Math.random() * 20));
  meta_title = faker.commerce.productMaterial();
  meta_description = faker.random.words(Math.floor(Math.random() * 20));
  breadcrumbs = [{
    id: faker.datatype.uuid(),
    name: faker.commerce.productMaterial(),
    level: faker.datatype.number({ min: 1, max: 5 }),
    url: faker.commerce.productMaterial(),
  }];
  children_count = faker.datatype.number({ min: 1, max: 10 });
  total_products = 1;
  product_ids = [faker.datatype.number({ min: 1, max: 100 }).toString()];
}

/**
 * A factory for creating a {@link DaffCategory}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFactory extends DaffModelFactory<DaffCategory>{
  constructor() {
    super(MockCategory);
  }
}
