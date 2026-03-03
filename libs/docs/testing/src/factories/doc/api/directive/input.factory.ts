import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffApiDirectiveInputDoc } from '@daffodil/docs-utils';

import { MockDaffDocsApiClassProperty } from '../class-prop.factory';
import { DaffDocsApiDecoratorFactory } from '../decorator.factory';

/**
 * Mock {@link DaffApiDirectiveInputDoc} object.
 */
export class MockDaffApiDirectiveInputDoc extends MockDaffDocsApiClassProperty implements DaffApiDirectiveInputDoc {
  required = faker.datatype.boolean();
}

/**
 * Factory for creating {@link DaffApiDirectiveInputDoc} objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiDirectiveInputDocFactory extends DaffModelFactory<DaffApiDirectiveInputDoc, typeof MockDaffApiDirectiveInputDoc> {
  constructor(
    decoratorFactory: DaffDocsApiDecoratorFactory,
  ) {
    super(MockDaffApiDirectiveInputDoc, decoratorFactory);
  }
}
