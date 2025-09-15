import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffNavDoc } from '@daffodil/docs-utils';

/**
 * Mocked DaffNavDoc object.
 */
export class MockNavDoc implements DaffNavDoc {
  id = faker.string.uuid();
  title = faker.lorem.words({ min: 1, max: 4 });
  path = faker.datatype.boolean({ probability: 0.8 }) ? `/${faker.lorem.slug()}` : undefined;
}

/**
 * Factory for creating DaffNavDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffNavDocFactory extends DaffModelFactory<DaffNavDoc, typeof MockNavDoc> {
  constructor() {
    super(MockNavDoc);
  }
}
