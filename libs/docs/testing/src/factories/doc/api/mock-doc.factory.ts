import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiMockDoc,
  DaffDocsApiRole,
} from '@daffodil/docs-utils';

import { DaffDocsApiClassPropertyFactory } from './class-prop.factory';
import { MockDaffDocsApiClass } from './class.factory';
import { DaffDocsApiDecoratorFactory } from './decorator.factory';
import { DaffDocsApiTypeMethodFactory } from './type/method.factory';
import { DaffBreadcrumbFactory } from '../../nav/public_api';

/**
 * Mock DaffApiMockDoc object.
 */
export class MockDaffApiMockDoc extends MockDaffDocsApiClass implements DaffApiMockDoc {
  override role: DaffDocsApiRole.MOCK = DaffDocsApiRole.MOCK;

  model = {
    label: faker.helpers.arrayElement(['DaffCart', 'DaffProduct', 'DaffCustomer', 'DaffOrder']),
    path: `/${faker.helpers.slugify(faker.lorem.words(2))}`,
  };
}

/**
 * Factory for creating DaffApiMockDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiMockDocFactory extends DaffModelFactory<DaffApiMockDoc, typeof MockDaffApiMockDoc> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    decoratorFactory: DaffDocsApiDecoratorFactory,
    propFactory: DaffDocsApiClassPropertyFactory,
    methodFactory: DaffDocsApiTypeMethodFactory,
  ) {
    super(
      MockDaffApiMockDoc,
      breadcrumbFactory,
      decoratorFactory,
      propFactory,
      methodFactory,
    );
  }
}
