import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiModuleDoc,
  DaffDocsApiRole,
} from '@daffodil/docs-utils';

import { DaffDocsApiClassPropertyFactory } from './class-prop.factory';
import { MockDaffDocsApiClass } from './class.factory';
import { DaffDocsApiDecoratorFactory } from './decorator.factory';
import { DaffDocsApiTypeMethodFactory } from './type/method.factory';
import { DaffBreadcrumbFactory } from '../../nav/public_api';

/**
 * Mock DaffApiModuleDoc object.
 */
export class MockDaffApiModuleDoc extends MockDaffDocsApiClass implements DaffApiModuleDoc {
  override role: DaffDocsApiRole.MODULE = DaffDocsApiRole.MODULE;
  override name = faker.helpers.arrayElement([
    'DaffCartModule',
    'DaffProductModule',
    'DaffCustomerModule',
    'DaffDesignModule',
  ]);
}

/**
 * Factory for creating DaffApiModuleDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiModuleDocFactory extends DaffModelFactory<DaffApiModuleDoc, typeof MockDaffApiModuleDoc> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    decoratorFactory: DaffDocsApiDecoratorFactory,
    propFactory: DaffDocsApiClassPropertyFactory,
    methodFactory: DaffDocsApiTypeMethodFactory,
  ) {
    super(
      MockDaffApiModuleDoc,
      breadcrumbFactory,
      decoratorFactory,
      propFactory,
      methodFactory,
    );
  }
}
