import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiServiceDoc,
  DaffDocsApiRole,
  DaffApiService,
} from '@daffodil/docs-utils';

import { DaffDocsApiClassPropertyFactory } from './class-prop.factory';
import { MockDaffDocsApiClass } from './class.factory';
import { DaffDocsApiDecoratorFactory } from './decorator.factory';
import { DaffDocsApiTypeMethodFactory } from './type/method.factory';
import { DaffBreadcrumbFactory } from '../../nav/public_api';

/**
 * Mock DaffApiServiceDoc object.
 */
export class MockDaffApiService extends MockDaffDocsApiClass implements DaffApiService {
  providedIn = faker.helpers.arrayElement(['root', 'platform', 'any', 'null']);
}

/**
 * Mock DaffApiServiceDoc object.
 */
export class MockDaffApiServiceDoc extends MockDaffApiService implements DaffApiServiceDoc {
  override role: DaffDocsApiRole.SERVICE = DaffDocsApiRole.SERVICE;
}

/**
 * Factory for creating DaffApiServiceDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiServiceDocFactory extends DaffModelFactory<DaffApiServiceDoc, typeof MockDaffApiServiceDoc> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    decoratorFactory: DaffDocsApiDecoratorFactory,
    propFactory: DaffDocsApiClassPropertyFactory,
    methodFactory: DaffDocsApiTypeMethodFactory,
  ) {
    super(
      MockDaffApiServiceDoc,
      breadcrumbFactory,
      decoratorFactory,
      propFactory,
      methodFactory,
    );
  }
}
