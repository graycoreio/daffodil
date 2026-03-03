import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiPipeDoc,
  DaffDocsApiRole,
} from '@daffodil/docs-utils';

import { DaffDocsApiClassPropertyFactory } from './class-prop.factory';
import { MockDaffDocsApiClass } from './class.factory';
import { DaffDocsApiDecoratorFactory } from './decorator.factory';
import { DaffDocsApiTypeMethodFactory } from './type/method.factory';
import { DaffBreadcrumbFactory } from '../../nav/public_api';

/**
 * Mock DaffApiPipeDoc object.
 */
export class MockDaffApiPipeDoc extends MockDaffDocsApiClass implements DaffApiPipeDoc {
  override role: DaffDocsApiRole.PIPE = DaffDocsApiRole.PIPE;
  override name = faker.helpers.arrayElement([
    'DaffCurrencyPipe',
    'DaffDatePipe',
    'DaffTruncatePipe',
    'DaffCapitalizePipe',
  ]);
}

/**
 * Factory for creating DaffApiPipeDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiPipeDocFactory extends DaffModelFactory<DaffApiPipeDoc, typeof MockDaffApiPipeDoc> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    decoratorFactory: DaffDocsApiDecoratorFactory,
    propFactory: DaffDocsApiClassPropertyFactory,
    methodFactory: DaffDocsApiTypeMethodFactory,
  ) {
    super(
      MockDaffApiPipeDoc,
      breadcrumbFactory,
      decoratorFactory,
      propFactory,
      methodFactory,
    );
  }
}
