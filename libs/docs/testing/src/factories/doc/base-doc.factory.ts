import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { sample } from '@daffodil/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffBaseDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DaffBreadcrumbFactory } from '../nav/breadcrumb.factory';

/**
 * Mocked DaffBaseDoc object.
 */
export class MockBaseDoc implements DaffBaseDoc {
  id = faker.string.uuid();
  title = faker.lorem.words({ min: 2, max: 5 });
  breadcrumbs = this.breadcrumbFactory.createMany(faker.number.int({ min: 1, max: 4 }));
  kind = sample(Object.values(DaffDocKind));
  path = `/api/packages/${faker.lorem.slug()}`;

  constructor(
    protected breadcrumbFactory: DaffBreadcrumbFactory,
  ) {}
}

/**
 * Factory for creating DaffBaseDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffBaseDocFactory extends DaffModelFactory<DaffBaseDoc, typeof MockBaseDoc> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
  ) {
    super(MockBaseDoc, breadcrumbFactory);
  }
}
