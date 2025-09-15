import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { sample } from '@daffodil/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiNavDoc,
  DaffDocsApiRole,
} from '@daffodil/docs-utils';

import { MockNavDoc } from './nav-doc.factory';

/**
 * Mocked DaffApiNavDoc object.
 */
export class MockApiNavDoc extends MockNavDoc implements DaffApiNavDoc {
  override path = `/api/${faker.lorem.slug()}`;
  docType = faker.helpers.arrayElement(['class', 'interface', 'function', 'type-alias', 'const', 'enum']);
  role = faker.datatype.boolean({ probability: 0.7 }) ? sample(Object.values(DaffDocsApiRole)) : undefined;
  deprecated = faker.datatype.boolean({ probability: 0.1 }) ? faker.lorem.sentence() : undefined;
}

/**
 * Factory for creating DaffApiNavDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiNavDocFactory extends DaffModelFactory<DaffApiNavDoc, typeof MockApiNavDoc> {
  constructor() {
    super(MockApiNavDoc);
  }
}
