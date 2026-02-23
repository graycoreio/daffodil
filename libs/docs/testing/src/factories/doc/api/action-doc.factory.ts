import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiActionDoc,
  DaffDocsApiRole,
  DaffDocsApiType,
  DaffDocKind,
} from '@daffodil/docs-utils';

/**
 * Mock DaffApiActionDoc object.
 */
export class MockDaffApiActionDoc implements DaffApiActionDoc {
  id = faker.string.uuid();
  title = faker.lorem.words(3);
  breadcrumbs = [];
  kind = DaffDocKind.API;
  contents = faker.lorem.paragraphs(2);
  tableOfContents = [];
  docType = DaffDocsApiType.CLASS;
  role = <DaffDocsApiRole.ACTION>DaffDocsApiRole.ACTION;
  examples = [];
  description = faker.lorem.paragraph();
  importExample = `import { ${faker.lorem.word()} } from '@daffodil/${faker.lorem.word()}';`;
  sourceApiBlock = faker.lorem.paragraph();
  slug = faker.helpers.slugify(faker.lorem.words(2));
  name = faker.helpers.arrayElement([
    'LoadItemsAction',
    'SaveItemAction',
    'DeleteItemAction',
    'UpdateItemAction',
  ]);
  deprecated = faker.datatype.boolean() ? faker.lorem.sentence() : '';

  typeParams = '';
  props = [];
  methods = [];
  decorators = [];
  extendsClauses = [];
  implementsClauses = [];

  type = faker.helpers.arrayElement([
    '[Action] Load Items',
    '[Action] Save Item',
    '[Action] Delete Item',
    '[Action] Update Item Success',
    '[Action] Load Items Failure',
  ]);
  payload = faker.datatype.boolean() ? {
    [faker.hacker.noun()]: faker.lorem.word(),
    [faker.hacker.noun()]: faker.number.int({ min: 1, max: 100 }),
  } : undefined;
}

/**
 * Factory for creating DaffApiActionDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiActionDocFactory extends DaffModelFactory<DaffApiActionDoc, typeof MockDaffApiActionDoc> {
  constructor() {
    super(MockDaffApiActionDoc);
  }
}
