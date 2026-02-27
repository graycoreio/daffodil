import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffDocsApiFunctionParam } from '@daffodil/docs-utils';

/**
 * Mock DaffDocsApiFunctionParam object.
 */
export class MockDaffDocsApiFunctionParam implements DaffDocsApiFunctionParam {
  name = faker.hacker.noun();
  anchor = faker.hacker.noun();
  defaultValue = faker.datatype.boolean() ? faker.lorem.word() : '';
  isOptional = faker.datatype.boolean();
  isRestParam = faker.datatype.boolean();
  type = faker.helpers.arrayElement(['string', 'number', 'boolean', 'any', 'void', 'object']);
  description = faker.lorem.sentence();
}

/**
 * Factory for creating DaffDocsApiFunctionParam objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocsApiFunctionParamFactory extends DaffModelFactory<DaffDocsApiFunctionParam, typeof MockDaffDocsApiFunctionParam> {
  constructor() {
    super(MockDaffDocsApiFunctionParam);
  }
}
