import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffApiPackageDoc } from '@daffodil/docs-utils';

import { DaffApiNavDocFactory } from './api-nav-doc.factory';
import { DaffBreadcrumbFactory } from './breadcrumb.factory';
import { MockBaseDoc } from '../doc/base-doc.factory';

/**
 * Mocked DaffApiPackageDoc object.
 */
export class MockApiPackageDoc extends MockBaseDoc implements DaffApiPackageDoc {
  docType = <const>'package';
  role = undefined;
  description = faker.lorem.paragraph();

  children = this._createChildren();

  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    protected apiNavDocFactory: DaffApiNavDocFactory,
  ) {
    super(breadcrumbFactory);
  }

  private _createChildren() {
    const childCount = faker.number.int({ min: 2, max: 8 });
    return Array.from({ length: childCount }, () => {
      const doc = this.apiNavDocFactory.create();
      return {
        ...doc,
        children: faker.datatype.boolean({ probability: 0.3 })
          ? this.apiNavDocFactory.createMany(faker.number.int({ min: 1, max: 3 })).map(child => ({
            ...child,
            children: [],
          }))
          : [],
      };
    });
  }
}

/**
 * Factory for creating DaffApiPackageDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiPackageDocFactory extends DaffModelFactory<DaffApiPackageDoc, typeof MockApiPackageDoc> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    apiNavDocFactory: DaffApiNavDocFactory,
  ) {
    super(MockApiPackageDoc, breadcrumbFactory, apiNavDocFactory);
  }
}
