import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiProviderDoc,
  DaffDocsApiRole,
} from '@daffodil/docs-utils';

import { DaffDocsApiFunctionParamFactory } from './function-param.factory';
import { MockDaffDocsApiFunction } from './function.factory';
import { DaffBreadcrumbFactory } from '../../nav/public_api';

/**
 * Mock DaffApiProviderDoc object.
 */
export class MockDaffApiProviderDoc extends MockDaffDocsApiFunction implements DaffApiProviderDoc {
  override role: DaffDocsApiRole.PROVIDER = DaffDocsApiRole.PROVIDER;
  token = {
    label: faker.helpers.arrayElement(['DAFF_CART_CONFIG', 'DAFF_AUTH_CONFIG', 'CUSTOM_TOKEN']),
    path: `/${faker.helpers.slugify(faker.lorem.words(2))}`,
  };
}

/**
 * Factory for creating DaffApiProviderDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiProviderDocFactory extends DaffModelFactory<DaffApiProviderDoc, typeof MockDaffApiProviderDoc> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    paramFactory: DaffDocsApiFunctionParamFactory,
  ) {
    super(
      MockDaffApiProviderDoc,
      breadcrumbFactory,
      paramFactory,
    );
  }
}
