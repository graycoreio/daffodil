import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiDocBase,
  DaffDocsApiRole,
  DaffDocsApiType,
  DaffDocKind,
} from '@daffodil/docs-utils';

/**
 * Mock DaffApiDocBase object.
 */
export class MockDaffApiDocBase implements DaffApiDocBase {
  id = faker.string.uuid();
  title = faker.lorem.words(3);
  breadcrumbs = [];
  kind = DaffDocKind.API;
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



}

/**
 * Factory for creating DaffApiDocBase objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiDocBaseFactory extends DaffModelFactory<DaffApiDocBase, typeof MockDaffApiDocBase> {
  constructor() {
    super(MockDaffApiDocBase);
  }
}
