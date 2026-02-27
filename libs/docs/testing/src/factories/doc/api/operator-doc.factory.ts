import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiOperatorDoc,
  DaffDocsApiRole,
} from '@daffodil/docs-utils';

import { DaffDocsApiFunctionParamFactory } from './function-param.factory';
import { MockDaffDocsApiFunction } from './function.factory';
import { DaffBreadcrumbFactory } from '../../nav/public_api';

/**
 * Mock DaffApiOperatorDoc object.
 */
export class MockDaffApiOperatorDoc extends MockDaffDocsApiFunction implements DaffApiOperatorDoc {
  override role: DaffDocsApiRole.OPERATOR = DaffDocsApiRole.OPERATOR;
  override name = faker.helpers.arrayElement([
    'daffOperatorFilterSuccess',
    'daffOperatorCatchError',
    'daffOperatorRetry',
    'daffOperatorTransform',
  ]);
}

/**
 * Factory for creating DaffApiOperatorDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiOperatorDocFactory extends DaffModelFactory<DaffApiOperatorDoc, typeof MockDaffApiOperatorDoc> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    paramFactory: DaffDocsApiFunctionParamFactory,
  ) {
    super(
      MockDaffApiOperatorDoc,
      breadcrumbFactory,
      paramFactory,
    );
  }
}
