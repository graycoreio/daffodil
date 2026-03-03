import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiReducerDoc,
  DaffDocsApiRole,
} from '@daffodil/docs-utils';

import { DaffDocsApiFunctionParamFactory } from './function-param.factory';
import { MockDaffDocsApiFunction } from './function.factory';
import { DaffBreadcrumbFactory } from '../../nav/public_api';

/**
 * Mock DaffApiReducerDoc object.
 */
export class MockDaffApiReducerDoc extends MockDaffDocsApiFunction implements DaffApiReducerDoc {
  override role: DaffDocsApiRole.REDUCER = DaffDocsApiRole.REDUCER;
  override name = faker.helpers.arrayElement([
    'daffCartReducer',
    'daffProductReducer',
    'daffCustomerReducer',
    'daffOrderReducer',
  ]);
}

/**
 * Factory for creating DaffApiReducerDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiReducerDocFactory extends DaffModelFactory<DaffApiReducerDoc, typeof MockDaffApiReducerDoc> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    paramFactory: DaffDocsApiFunctionParamFactory,
  ) {
    super(
      MockDaffApiReducerDoc,
      breadcrumbFactory,
      paramFactory,
    );
  }
}
