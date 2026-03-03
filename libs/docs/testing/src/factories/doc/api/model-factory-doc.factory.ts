import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiModelFactoryDoc,
  DaffDocsApiRole,
} from '@daffodil/docs-utils';

import { DaffDocsApiClassPropertyFactory } from './class-prop.factory';
import { DaffDocsApiDecoratorFactory } from './decorator.factory';
import { MockDaffApiService } from './service-doc.factory';
import { DaffDocsApiTypeMethodFactory } from './type/method.factory';
import { DaffBreadcrumbFactory } from '../../nav/public_api';

/**
 * Mock DaffApiModelFactoryDoc object.
 */
export class MockDaffApiModelFactoryDoc extends MockDaffApiService implements DaffApiModelFactoryDoc {
  override role: DaffDocsApiRole.MODEL_FACTORY = DaffDocsApiRole.MODEL_FACTORY;
  override name = faker.helpers.arrayElement([
    'DaffCartFactory',
    'DaffProductFactory',
    'DaffCustomerFactory',
    'DaffOrderFactory',
  ]);
  model = {
    label: faker.helpers.arrayElement(['DaffCart', 'DaffProduct', 'DaffCustomer', 'DaffOrder']),
    path: `/${faker.helpers.slugify(faker.lorem.words(2))}`,
  };
}

/**
 * Factory for creating DaffApiModelFactoryDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiModelFactoryDocFactory extends DaffModelFactory<DaffApiModelFactoryDoc, typeof MockDaffApiModelFactoryDoc> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    decoratorFactory: DaffDocsApiDecoratorFactory,
    propFactory: DaffDocsApiClassPropertyFactory,
    methodFactory: DaffDocsApiTypeMethodFactory,
  ) {
    super(
      MockDaffApiModelFactoryDoc,
      breadcrumbFactory,
      decoratorFactory,
      propFactory,
      methodFactory,
    );
  }
}
