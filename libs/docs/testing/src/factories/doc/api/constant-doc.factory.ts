import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiConstantDoc,
  DaffDocsApiRole,
  DaffDocsApiType,
  DaffDocKind,
} from '@daffodil/docs-utils';

/**
 * Mock DaffApiConstantDoc object.
 */
export class MockDaffApiConstantDoc implements DaffApiConstantDoc {
  id = faker.string.uuid();
  title = faker.lorem.words(3);
  breadcrumbs = [];
  kind = DaffDocKind.API;
  contents = faker.lorem.paragraphs(2);
  tableOfContents = [];
  docType = DaffDocsApiType.CONST;
  role = <DaffDocsApiRole.CONSTANT>DaffDocsApiRole.CONSTANT;
  examples = [];
  description = faker.lorem.paragraph();
  importExample = `import { ${faker.lorem.word()} } from '@daffodil/${faker.lorem.word()}';`;
  sourceApiBlock = faker.lorem.paragraph();
  slug = faker.helpers.slugify(faker.lorem.words(2));
  name = faker.helpers.arrayElement([
    'DAFF_CART_STORAGE_KEY',
    'DAFF_DEFAULT_PRODUCT_LIMIT',
    'DAFF_MAX_RETRY_ATTEMPTS',
    'DAFF_DEFAULT_CURRENCY',
  ]);
  deprecated = faker.datatype.boolean() ? faker.lorem.sentence() : '';

  typeParams = '';
  props = [];
  methods = [];
  decorators = [];
  extendsClauses = [];
  implementsClauses = [];
  type = faker.helpers.arrayElement(['string', 'number', 'boolean', 'object', 'Config']);
}

/**
 * Factory for creating DaffApiConstantDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiConstantDocFactory extends DaffModelFactory<DaffApiConstantDoc, typeof MockDaffApiConstantDoc> {
  constructor() {
    super(MockDaffApiConstantDoc);
  }
}
