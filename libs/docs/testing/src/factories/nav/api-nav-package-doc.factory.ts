import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { sample } from '@daffodil/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiNavPackageDoc,
  DaffDocsApiRole,
} from '@daffodil/docs-utils';

import { MockNavDoc } from './nav-doc.factory';

/**
 * Mocked DaffApiNavPackageDoc object.
 */
export class MockApiNavPackageDoc extends MockNavDoc implements DaffApiNavPackageDoc {
  override path = `/api/packages/${faker.lorem.slug()}`;
  docType = <const>'package';
  role = faker.datatype.boolean({ probability: 0.5 }) ? sample(Object.values(DaffDocsApiRole)) : undefined;
  description = faker.lorem.paragraph();
}

/**
 * Factory for creating DaffApiNavPackageDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiNavPackageDocFactory extends DaffModelFactory<DaffApiNavPackageDoc, typeof MockApiNavPackageDoc> {
  constructor() {
    super(MockApiNavPackageDoc);
  }
}
