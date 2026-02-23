import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiTokenDoc,
  DaffDocsApiRole,
  DaffDocsApiType,
  DaffDocKind,
} from '@daffodil/docs-utils';

/**
 * Mock DaffApiTokenDoc object.
 */
export class MockDaffApiTokenDoc implements DaffApiTokenDoc {

  id = faker.string.uuid();
  title = faker.lorem.words(3);
  breadcrumbs = [];
  kind = DaffDocKind.API;
  contents = faker.lorem.paragraphs(2);
  tableOfContents = [];
  docType = DaffDocsApiType.CONST;
  role = <DaffDocsApiRole.TOKEN>DaffDocsApiRole.TOKEN;
  examples = [];
  description = faker.lorem.paragraph();
  importExample = `import { ${faker.lorem.word()} } from '@daffodil/${faker.lorem.word()}';`;
  sourceApiBlock = faker.lorem.paragraph();
  slug = faker.helpers.slugify(faker.lorem.words(2));
  name = faker.helpers.arrayElement([
    'DAFF_CART_CONFIG',
    'DAFF_PRODUCT_CONFIG',
    'DAFF_AUTH_TOKEN',
    'DAFF_API_BASE_URL',
  ]);
  deprecated = faker.datatype.boolean() ? faker.lorem.sentence() : '';
  typeParams = '';
  props = [];
  methods = [];
  decorators = [];
  extendsClauses = [];
  implementsClauses = [];
  type = faker.helpers.arrayElement(['string', 'number', 'Config', 'InjectionToken<T>']);
  provider = {
    label: faker.helpers.arrayElement(['provideDaffCart', 'provideDaffAuth', 'MyProvider']),
    path: `/${faker.helpers.slugify(faker.lorem.words(2))}`,
  };
}

/**
 * Factory for creating DaffApiTokenDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiTokenDocFactory extends DaffModelFactory<DaffApiTokenDoc, typeof MockDaffApiTokenDoc> {
  constructor() {
    super(MockDaffApiTokenDoc);
  }
}
