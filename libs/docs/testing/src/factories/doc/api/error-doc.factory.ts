import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiErrorDoc,
  DaffDocsApiRole,
} from '@daffodil/docs-utils';

import { DaffDocsApiClassPropertyFactory } from './class-prop.factory';
import { MockDaffDocsApiClass } from './class.factory';
import { DaffDocsApiDecoratorFactory } from './decorator.factory';
import { DaffDocsApiTypeMethodFactory } from './type/method.factory';
import { DaffBreadcrumbFactory } from '../../nav/public_api';

/**
 * Mock DaffApiErrorDoc object.
 */
export class MockDaffApiErrorDoc extends MockDaffDocsApiClass implements DaffApiErrorDoc {
  override role: DaffDocsApiRole.ERROR = DaffDocsApiRole.ERROR;
  code = faker.helpers.arrayElement(['CART_001', 'PRODUCT_404', 'AUTH_403', 'PAYMENT_500']);
}

/**
 * Factory for creating DaffApiErrorDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiErrorDocFactory extends DaffModelFactory<DaffApiErrorDoc, typeof MockDaffApiErrorDoc> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    decoratorFactory: DaffDocsApiDecoratorFactory,
    propFactory: DaffDocsApiClassPropertyFactory,
    methodFactory: DaffDocsApiTypeMethodFactory,
  ) {
    super(
      MockDaffApiErrorDoc,
      breadcrumbFactory,
      decoratorFactory,
      propFactory,
      methodFactory,
    );
  }
}
