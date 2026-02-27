import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffModelFactory,
  IDaffModelFactory,
} from '@daffodil/core/testing';
import {
  DaffDocsApiHostDirective,
  DaffDocsApiHostDirectiveInheritedField,
  DaffDocsApiRef,
} from '@daffodil/docs-utils';

import { DaffDocsApiHostDirectiveInheritedFieldFactory } from './inherited-field.factory';
import { DaffDocsApiRefFactory } from '../../../api/public_api';

/**
 * Mock {@link DaffDocsApiHostDirective} object.
 */
export class MockDaffDocsApiHostDirective implements DaffDocsApiHostDirective {
  directive = this.refFactory.create();
  inputs = this.fieldFactory.createMany(faker.number.int(3));
  outputs = this.fieldFactory.createMany(faker.number.int(3));

  constructor(
    protected refFactory: IDaffModelFactory<DaffDocsApiRef>,
    protected fieldFactory: IDaffModelFactory<DaffDocsApiHostDirectiveInheritedField>,
  ) {}
}

/**
 * Factory for creating {@link DaffDocsApiHostDirective} objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocsApiHostDirectiveFactory extends DaffModelFactory<DaffDocsApiHostDirective, typeof MockDaffDocsApiHostDirective> {
  constructor(
    refFactory: DaffDocsApiRefFactory,
    fieldFactory: DaffDocsApiHostDirectiveInheritedFieldFactory,
  ) {
    super(
      MockDaffDocsApiHostDirective,
      refFactory,
      fieldFactory,
    );
  }
}
