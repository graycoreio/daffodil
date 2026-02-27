import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiConstantDoc,
  DaffDocsApiRole,
  DaffApiConstant,
} from '@daffodil/docs-utils';

import { MockDaffApiDocBase } from './base.factory';
import { DaffBreadcrumbFactory } from '../../nav/public_api';

/**
 * Mock DaffApiConstant object.
 */
export class MockDaffApiConstant extends MockDaffApiDocBase implements DaffApiConstant {
  type = faker.helpers.arrayElement(['string', 'number', 'boolean', 'object', 'Config']);
}

/**
 * Mock DaffApiConstantDoc object.
 */
export class MockDaffApiConstantDoc extends MockDaffApiConstant implements DaffApiConstantDoc {
  override role: DaffDocsApiRole.CONSTANT = DaffDocsApiRole.CONSTANT;
}

/**
 * Factory for creating DaffApiConstantDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiConstantDocFactory extends DaffModelFactory<DaffApiConstantDoc, typeof MockDaffApiConstantDoc> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
  ) {
    super(MockDaffApiConstantDoc, breadcrumbFactory);
  }
}
