import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiSelectorDoc,
  DaffDocsApiRole,
  DaffDocsApiType,
  DaffDocKind,
} from '@daffodil/docs-utils';

/**
 * Mock DaffApiSelectorDoc object.
 */
export class MockDaffApiSelectorDoc implements DaffApiSelectorDoc {

  id = faker.string.uuid();
  title = faker.lorem.words(3);
  breadcrumbs = [];
  kind = DaffDocKind.API;
  contents = faker.lorem.paragraphs(2);
  tableOfContents = [];
  docType = DaffDocsApiType.FUNCTION;
  role = <DaffDocsApiRole.SELECTOR>DaffDocsApiRole.SELECTOR;
  examples = [];
  description = faker.lorem.paragraph();
  importExample = `import { ${faker.lorem.word()} } from '@daffodil/${faker.lorem.word()}';`;
  sourceApiBlock = faker.lorem.paragraph();
  slug = faker.helpers.slugify(faker.lorem.words(2));
  name = faker.helpers.arrayElement([
    'selectCartItems',
    'selectProductList',
    'selectCustomerInfo',
    'selectOrderTotal',
  ]);
  deprecated = faker.datatype.boolean() ? faker.lorem.sentence() : '';

  typeParameters = '';
  parameterDocs = [
    {
      name: 'state',
      defaultValue: '',
      isOptional: false,
      isRestParam: false,
      type: 'State',
      description: 'The application state',
    },
  ];
  type = 'T';
}

/**
 * Factory for creating DaffApiSelectorDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiSelectorDocFactory extends DaffModelFactory<DaffApiSelectorDoc, typeof MockDaffApiSelectorDoc> {
  constructor() {
    super(MockDaffApiSelectorDoc);
  }
}
