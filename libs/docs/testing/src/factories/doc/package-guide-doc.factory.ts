import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffPackageGuideDoc,
  DaffDocsApiRole,
} from '@daffodil/docs-utils';

import { MockDoc } from './doc.factory';
import { DaffBreadcrumbFactory } from '../nav/breadcrumb.factory';
import { DaffDocTableOfContentsEntryFactory } from '../nav/table-of-contents-entry.factory';

/**
 * Mocked DaffPackageGuideDoc object.
 */
export class MockPackageGuideDoc extends MockDoc implements DaffPackageGuideDoc {
  symbols = faker.helpers.arrayElements([
    'DaffProduct',
    'DaffProductService',
    'DaffProductFactory',
    'DaffCart',
    'DaffCartService',
    'DaffCategory',
    'DaffCustomer',
    'DaffOrder',
    'DaffAuth',
    'DaffAuthService',
    'MockProduct',
    'MockCart',
  ], { min: 3, max: 10 });

  api = Object.values(DaffDocsApiRole).reduce((acc, role) => {
    if (faker.datatype.boolean({ probability: 0.3 })) {
      acc[<DaffDocsApiRole>role] = [];
    }
    return acc;
  }, <Record<DaffDocsApiRole, any[]>>{});

  longDescription = `<h2>Overview</h2><p>${faker.lorem.paragraph()}</p><h3>Features</h3><ul><li>${faker.lorem.sentence()}</li><li>${faker.lorem.sentence()}</li><li>${faker.lorem.sentence()}</li></ul><p>${faker.lorem.paragraph()}</p>`;

  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    tocFactory: DaffDocTableOfContentsEntryFactory,
  ) {
    super(breadcrumbFactory, tocFactory);
  }
}

/**
 * Factory for creating DaffPackageGuideDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffPackageGuideDocFactory extends DaffModelFactory<DaffPackageGuideDoc, typeof MockPackageGuideDoc> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    tocFactory: DaffDocTableOfContentsEntryFactory,
  ) {
    super(MockPackageGuideDoc, breadcrumbFactory, tocFactory);
  }
}
