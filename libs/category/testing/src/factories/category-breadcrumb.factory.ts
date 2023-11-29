import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffCategoryBreadcrumb } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockCategoryBreadcrumb implements DaffCategoryBreadcrumb {
  id = faker.datatype.uuid();
  name = faker.commerce.productMaterial();
  level = faker.datatype.number({ min: 1, max: 5 });
  url = faker.commerce.productMaterial();
}

/**
 * A factory for creating a {@link DaffCategoryBreadcrumb}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCategoryBreadcrumbFactory extends DaffModelFactory<DaffCategoryBreadcrumb, typeof MockCategoryBreadcrumb>{
  constructor() {
    super(MockCategoryBreadcrumb);
  }
}
