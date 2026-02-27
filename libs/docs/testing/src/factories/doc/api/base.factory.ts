import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiDocBase,
  DaffDocsApiRole,
  DaffDocsApiType,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DaffBreadcrumbFactory } from '../../nav/public_api';
import { MockBaseDoc } from '../base-doc.factory';

/**
 * Mock DaffApiDocBase object.
 */
export class MockDaffApiDocBase extends MockBaseDoc implements DaffApiDocBase {
  override kind = DaffDocKind.API;
  contents = faker.lorem.paragraphs(2);
  tableOfContents = [];
  docType = faker.helpers.arrayElement(Object.values(DaffDocsApiType));
  role = faker.helpers.arrayElement(Object.values(DaffDocsApiRole));
  examples = [];
  description = faker.lorem.paragraph();
  importExample = `import { ${faker.lorem.word()} } from '@daffodil/${faker.lorem.word()}';`;
  sourceApiBlock = faker.lorem.paragraph();
  slug = faker.helpers.slugify(faker.lorem.words(2));
  name = faker.helpers.arrayElement([
    faker.hacker.noun(),
    `${faker.hacker.adjective()}${faker.hacker.noun()}`,
    `Daff${faker.helpers.arrayElement(['Component', 'Service', 'Interface', 'Type'])}`,
  ]);
  deprecated = faker.datatype.boolean() ? faker.lorem.sentence() : '';
  package = `@daffodil/${faker.lorem.word()}`;
}

/**
 * Factory for creating DaffApiDocBase objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiDocBaseFactory extends DaffModelFactory<DaffApiDocBase, typeof MockDaffApiDocBase> {
  constructor(
    breadcrumbFactory: DaffBreadcrumbFactory,
  ) {
    super(MockDaffApiDocBase, breadcrumbFactory);
  }
}
