import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffDocsApiRef } from '@daffodil/docs-utils';

/**
 * Mocked DaffDocsApiRef object.
 */
export class MockDocsApiRef implements DaffDocsApiRef {
  label = faker.helpers.arrayElement([
    'DaffProduct',
    'DaffCart',
    'DaffCustomer',
    'DaffOrder',
    'DaffCategory',
    'DaffAuth',
  ]) + faker.helpers.arrayElement(['', 'Service', 'Factory', 'Component']);
  path = `/api/${faker.lorem.slug()}`;
}

/**
 * A factory for creating a {@link DaffDocsApiRef}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocsApiRefFactory extends DaffModelFactory<DaffDocsApiRef, typeof MockDocsApiRef> {
  constructor() {
    super(MockDocsApiRef);
  }
}
