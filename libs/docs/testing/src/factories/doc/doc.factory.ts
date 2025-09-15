import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffDoc } from '@daffodil/docs-utils';

import { MockBaseDoc } from './base-doc.factory';
import { DaffBreadcrumbFactory } from '../nav/breadcrumb.factory';
import { DaffDocTableOfContentsEntryFactory } from '../nav/table-of-contents-entry.factory';

/**
 * Mocked DaffDoc object.
 */
export class MockDoc extends MockBaseDoc implements DaffDoc {
  contents = `<h1>${faker.lorem.words({ min: 2, max: 4 })}</h1>\n<p>${faker.lorem.paragraphs(3, '\n')}</p>\n<h2>${faker.lorem.words({ min: 1, max: 3 })}</h2>\n<p>${faker.lorem.paragraphs(2, '\n')}</p>`;
  tableOfContents = this.tocFactory.createMany(faker.number.int({ min: 3, max: 8 }));

  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    protected tocFactory: DaffDocTableOfContentsEntryFactory,
  ) {
    super(breadcrumbFactory);
  }
}

/**
 * Factory for creating DaffDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocFactory extends DaffModelFactory<DaffDoc, typeof MockDoc> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
    tocFactory: DaffDocTableOfContentsEntryFactory,
  ) {
    super(MockDoc, breadcrumbFactory, tocFactory);
  }
}
