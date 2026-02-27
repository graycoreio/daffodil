import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffDocsApiClassProperty } from '@daffodil/docs-utils';

import { DaffDocsApiDecoratorFactory } from './decorator.factory';
import { MockDaffDocsApiTypeProperty } from './type/prop.factory';

/**
 * Mock {@link DaffDocsApiClassProperty} object.
 */
export class MockDaffDocsApiClassProperty extends MockDaffDocsApiTypeProperty implements DaffDocsApiClassProperty {
  default = faker.lorem.word();
}

/**
 * Factory for creating {@link DaffDocsApiClassProperty} objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocsApiClassPropertyFactory extends DaffModelFactory<DaffDocsApiClassProperty, typeof MockDaffDocsApiClassProperty> {
  constructor(
    decoratorFactory: DaffDocsApiDecoratorFactory,
  ) {
    super(MockDaffDocsApiClassProperty, decoratorFactory);
  }
}
