import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffDocsApiRole,
  DaffDocsApiType,
  DaffDocKind,
} from '@daffodil/docs-utils';

/**
 * Mock DaffApiHelperDoc object - Function variant.
 */
export class MockDaffApiHelperDoc {

  id = faker.string.uuid();
  title = faker.lorem.words(3);
  breadcrumbs = [];
  kind = DaffDocKind.API;
  contents = faker.lorem.paragraphs(2);
  tableOfContents = [];
  docType = DaffDocsApiType.FUNCTION;
  role = <DaffDocsApiRole.HELPER>DaffDocsApiRole.HELPER;
  examples = [];
  description = faker.lorem.paragraph();
  importExample = `import { ${faker.lorem.word()} } from '@daffodil/${faker.lorem.word()}';`;
  sourceApiBlock = faker.lorem.paragraph();
  slug = faker.helpers.slugify(faker.lorem.words(2));
  name = faker.helpers.arrayElement([
    'daffArrayToDict',
    'daffAdd',
    'daffSubtract',
    'daffTransform',
  ]);
  deprecated = faker.datatype.boolean() ? faker.lorem.sentence() : '';

  typeParameters = '';
  parameterDocs = [
    {
      name: 'value',
      defaultValue: '',
      isOptional: false,
      isRestParam: false,
      type: 'T',
      description: 'The input value',
    },
  ];
  type = 'T | U';
}

/**
 * Factory for creating DaffApiHelperDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiHelperDocFactory extends DaffModelFactory<any, typeof MockDaffApiHelperDoc> {
  constructor() {
    super(MockDaffApiHelperDoc);
  }
}
