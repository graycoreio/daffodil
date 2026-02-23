import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiReducerDoc,
  DaffDocsApiRole,
  DaffDocsApiType,
  DaffDocKind,
} from '@daffodil/docs-utils';

/**
 * Mock DaffApiReducerDoc object.
 */
export class MockDaffApiReducerDoc implements DaffApiReducerDoc {

  id = faker.string.uuid();
  title = faker.lorem.words(3);
  breadcrumbs = [];
  kind = DaffDocKind.API;
  contents = faker.lorem.paragraphs(2);
  tableOfContents = [];
  docType = DaffDocsApiType.FUNCTION;
  role = <DaffDocsApiRole.REDUCER>DaffDocsApiRole.REDUCER;
  examples = [];
  description = faker.lorem.paragraph();
  importExample = `import { ${faker.lorem.word()} } from '@daffodil/${faker.lorem.word()}';`;
  sourceApiBlock = faker.lorem.paragraph();
  slug = faker.helpers.slugify(faker.lorem.words(2));
  name = faker.helpers.arrayElement([
    'daffCartReducer',
    'daffProductReducer',
    'daffCustomerReducer',
    'daffOrderReducer',
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
      description: 'The current state',
    },
    {
      name: 'action',
      defaultValue: '',
      isOptional: false,
      isRestParam: false,
      type: 'Action',
      description: 'The action to process',
    },
  ];
  type = 'State';
}

/**
 * Factory for creating DaffApiReducerDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiReducerDocFactory extends DaffModelFactory<DaffApiReducerDoc, typeof MockDaffApiReducerDoc> {
  constructor() {
    super(MockDaffApiReducerDoc);
  }
}
