import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiSelectorDoc,
  DaffDocsApiRole,
} from '@daffodil/docs-utils';

import { DaffDocsApiFunctionParamFactory } from './function-param.factory';
import { MockDaffDocsApiFunction } from './function.factory';
import { DaffBreadcrumbFactory } from '../../nav/public_api';

/**
 * Mock DaffApiSelectorDoc object.
 */
export class MockDaffApiSelectorDoc extends MockDaffDocsApiFunction implements DaffApiSelectorDoc {
  override role: DaffDocsApiRole.SELECTOR = DaffDocsApiRole.SELECTOR;
  override name = faker.helpers.arrayElement([
    'selectCartItems',
    'selectProductList',
    'selectCustomerInfo',
    'selectOrderTotal',
  ]);
}

/**
 * Factory for creating DaffApiSelectorDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiSelectorDocFactory extends DaffModelFactory<DaffApiSelectorDoc, typeof MockDaffApiSelectorDoc> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    paramFactory: DaffDocsApiFunctionParamFactory,
  ) {
    super(
      MockDaffApiSelectorDoc,
      breadcrumbFactory,
      paramFactory,
    );
  }
}
