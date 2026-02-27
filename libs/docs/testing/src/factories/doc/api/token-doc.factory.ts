import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiTokenDoc,
  DaffDocsApiRole,
} from '@daffodil/docs-utils';

import { MockDaffApiConstant } from './constant-doc.factory';
import { DaffBreadcrumbFactory } from '../../nav/public_api';

/**
 * Mock DaffApiTokenDoc object.
 */
export class MockDaffApiTokenDoc extends MockDaffApiConstant implements DaffApiTokenDoc {
  override role: DaffDocsApiRole.TOKEN = DaffDocsApiRole.TOKEN;
  override name = faker.helpers.arrayElement([
    'DAFF_CART_CONFIG',
    'DAFF_PRODUCT_CONFIG',
    'DAFF_AUTH_TOKEN',
    'DAFF_API_BASE_URL',
  ]);

  provider = {
    label: faker.helpers.arrayElement(['provideDaffCart', 'provideDaffAuth', 'MyProvider']),
    path: `/${faker.helpers.slugify(faker.lorem.words(2))}`,
  };
}

/**
 * Factory for creating DaffApiTokenDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiTokenDocFactory extends DaffModelFactory<DaffApiTokenDoc, typeof MockDaffApiTokenDoc> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
  ) {
    super(MockDaffApiTokenDoc, breadcrumbFactory);
  }
}
