import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffBreadcrumb } from '@daffodil/docs-utils';

/**
 * Mocked DaffBreadcrumb object.
 */
export class MockBreadcrumb implements DaffBreadcrumb {
  label = faker.commerce.department();
  path = `/${faker.lorem.slug()}`;
}

/**
 * A factory for creating a {@link DaffBreadcrumb}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffBreadcrumbFactory extends DaffModelFactory<DaffBreadcrumb, typeof MockBreadcrumb> {
  constructor() {
    super(MockBreadcrumb);
  }
}
