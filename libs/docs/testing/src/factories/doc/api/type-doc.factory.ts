import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiTypeDoc,
  DaffDocsApiRole,
  DaffDocsApiType,
  DaffDocKind,
} from '@daffodil/docs-utils';

/**
 * Mock DaffApiTypeDoc object.
 */
export class MockDaffApiTypeDoc implements DaffApiTypeDoc {

  id = faker.string.uuid();
  title = faker.lorem.words(3);
  breadcrumbs = [];
  kind = DaffDocKind.API;
  contents = faker.lorem.paragraphs(2);
  tableOfContents = [];
  docType = faker.helpers.arrayElement([DaffDocsApiType.INTERFACE, DaffDocsApiType.TYPE_ALIAS]);
  role = <DaffDocsApiRole.TYPE>DaffDocsApiRole.TYPE;
  examples = [];
  description = faker.lorem.paragraph();
  importExample = `import { ${faker.lorem.word()} } from '@daffodil/${faker.lorem.word()}';`;
  sourceApiBlock = faker.lorem.paragraph();
  slug = faker.helpers.slugify(faker.lorem.words(2));
  name = faker.helpers.arrayElement([
    'DaffCart',
    'DaffProduct',
    'DaffCustomer',
    'DaffOrder',
    'DaffCartItem',
  ]);
  deprecated = faker.datatype.boolean() ? faker.lorem.sentence() : '';
  typeParams = '';
  props = [];
  methods = [];
  decorators = [];
  extendsClauses = [];
  implementsClauses = [];
}

/**
 * Factory for creating DaffApiTypeDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiTypeDocFactory extends DaffModelFactory<DaffApiTypeDoc, typeof MockDaffApiTypeDoc> {
  constructor() {
    super(MockDaffApiTypeDoc);
  }
}
