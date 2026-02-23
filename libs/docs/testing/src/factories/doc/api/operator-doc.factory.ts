import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiOperatorDoc,
  DaffDocsApiRole,
  DaffDocsApiType,
  DaffDocKind,
} from '@daffodil/docs-utils';

/**
 * Mock DaffApiOperatorDoc object.
 */
export class MockDaffApiOperatorDoc implements DaffApiOperatorDoc {

  id = faker.string.uuid();
  title = faker.lorem.words(3);
  breadcrumbs = [];
  kind = DaffDocKind.API;
  contents = faker.lorem.paragraphs(2);
  tableOfContents = [];
  docType = DaffDocsApiType.FUNCTION;
  role = <DaffDocsApiRole.OPERATOR>DaffDocsApiRole.OPERATOR;
  examples = [];
  description = faker.lorem.paragraph();
  importExample = `import { ${faker.lorem.word()} } from '@daffodil/${faker.lorem.word()}';`;
  sourceApiBlock = faker.lorem.paragraph();
  slug = faker.helpers.slugify(faker.lorem.words(2));
  name = faker.helpers.arrayElement([
    'daffOperatorFilterSuccess',
    'daffOperatorCatchError',
    'daffOperatorRetry',
    'daffOperatorTransform',
  ]);
  deprecated = faker.datatype.boolean() ? faker.lorem.sentence() : '';

  typeParameters = '';
  parameterDocs = [
    {
      name: 'source',
      defaultValue: '',
      isOptional: false,
      isRestParam: false,
      type: 'Observable<T>',
      description: 'The source observable',
    },
  ];
  type = 'Observable<U>';
}

/**
 * Factory for creating DaffApiOperatorDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiOperatorDocFactory extends DaffModelFactory<DaffApiOperatorDoc, typeof MockDaffApiOperatorDoc> {
  constructor() {
    super(MockDaffApiOperatorDoc);
  }
}
