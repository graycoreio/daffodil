import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProductCustomAttributeOption } from '@daffodil/product';

/**
 * Mocked DaffProductCustomAttributeOption object.
 */
export class MockDaffProductCustomAttributeOption implements DaffProductCustomAttributeOption {
  id = faker.string.uuid();
  label = faker.word.noun();
}

/**
 * Factory for creating DaffProductCustomAttributeOptions.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductCustomAttributeOptionFactory extends DaffModelFactory<DaffProductCustomAttributeOption> {
  constructor() {
    super(MockDaffProductCustomAttributeOption);
  }
}
