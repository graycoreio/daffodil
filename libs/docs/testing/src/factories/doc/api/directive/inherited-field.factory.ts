import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffDocsApiHostDirectiveInheritedField } from '@daffodil/docs-utils';

/**
 * Mock {@link DaffDocsApiHostDirectiveInheritedField} object.
 */
export class MockDaffDocsApiHostDirectiveInheritedField implements DaffDocsApiHostDirectiveInheritedField {
  field = faker.lorem.word();
  parentField = faker.lorem.word();
}

/**
 * Factory for creating {@link DaffDocsApiHostDirectiveInheritedField} objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocsApiHostDirectiveInheritedFieldFactory extends DaffModelFactory<DaffDocsApiHostDirectiveInheritedField, typeof MockDaffDocsApiHostDirectiveInheritedField> {
  constructor() {
    super(MockDaffDocsApiHostDirectiveInheritedField);
  }
}
