import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffDocsApiDecorator } from '@daffodil/docs-utils';

/**
 * Mock {@link DaffDocsApiDecorator} object.
 */
export class MockDaffDocsApiDecorator implements DaffDocsApiDecorator {
  name = faker.lorem.word();
  accessibility = faker.lorem.word();
  arguments = [faker.lorem.word()];
  argumentInfo = [faker.lorem.word()];
  isCallExpression = faker.datatype.boolean();
}

/**
 * Factory for creating {@link DaffDocsApiDecorator} objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocsApiDecoratorFactory extends DaffModelFactory<DaffDocsApiDecorator, typeof MockDaffDocsApiDecorator> {
  constructor() {
    super(MockDaffDocsApiDecorator);
  }
}
