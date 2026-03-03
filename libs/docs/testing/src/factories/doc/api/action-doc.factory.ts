import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiActionDoc,
  DaffDocsApiRole,
} from '@daffodil/docs-utils';

import { DaffDocsApiDecoratorFactory } from './decorator.factory';
import { MockDaffApiType } from './type/doc.factory';
import { DaffDocsApiTypeMethodFactory } from './type/method.factory';
import { DaffDocsApiTypePropertyFactory } from './type/prop.factory';
import { DaffBreadcrumbFactory } from '../../nav/public_api';

/**
 * Mock DaffApiActionDoc object.
 */
export class MockDaffApiActionDoc extends MockDaffApiType implements DaffApiActionDoc {
  override role: DaffDocsApiRole.ACTION = DaffDocsApiRole.ACTION;

  type = faker.helpers.arrayElement([
    '[Action] Load Items',
    '[Action] Save Item',
    '[Action] Delete Item',
    '[Action] Update Item Success',
    '[Action] Load Items Failure',
  ]);
  payload = faker.datatype.boolean() ? {
    [faker.hacker.noun()]: faker.lorem.word(),
    [faker.hacker.noun()]: faker.number.int({ min: 1, max: 100 }),
  } : undefined;
}

/**
 * Factory for creating DaffApiActionDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiActionDocFactory extends DaffModelFactory<DaffApiActionDoc, typeof MockDaffApiActionDoc> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    decoratorFactory: DaffDocsApiDecoratorFactory,
    propFactory: DaffDocsApiTypePropertyFactory,
    methodFactory: DaffDocsApiTypeMethodFactory,
  ) {
    super(
      MockDaffApiActionDoc,
      breadcrumbFactory,
      decoratorFactory,
      propFactory,
      methodFactory,
    );
  }
}
