import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffDesignGuideNavDoc } from '@daffodil/docs-utils';

import { MockNavDoc } from './nav-doc.factory';

/**
 * Mocked DaffDesignGuideNavDoc object.
 */
export class MockDesignGuideNavDoc extends MockNavDoc implements DaffDesignGuideNavDoc {
  description = faker.datatype.boolean({ probability: 0.7 }) ? faker.lorem.sentence() : undefined;
}

/**
 * Factory for creating DaffDesignGuideNavDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDesignGuideNavDocFactory extends DaffModelFactory<DaffDesignGuideNavDoc, typeof MockDesignGuideNavDoc> {
  constructor() {
    super(MockDesignGuideNavDoc);
  }
}
