import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiProviderDoc,
  DaffDocsApiRole,
  DaffDocsApiType,
  DaffDocKind,
} from '@daffodil/docs-utils';

/**
 * Mock DaffApiProviderDoc object.
 */
export class MockDaffApiProviderDoc implements DaffApiProviderDoc {

  id = faker.string.uuid();
  title = faker.lorem.words(3);
  breadcrumbs = [];
  kind = DaffDocKind.API;
  contents = faker.lorem.paragraphs(2);
  tableOfContents = [];
  docType = DaffDocsApiType.FUNCTION;
  role = <DaffDocsApiRole.PROVIDER>DaffDocsApiRole.PROVIDER;
  examples = [];
  description = faker.lorem.paragraph();
  importExample = `import { ${faker.lorem.word()} } from '@daffodil/${faker.lorem.word()}';`;
  sourceApiBlock = faker.lorem.paragraph();
  slug = faker.helpers.slugify(faker.lorem.words(2));
  name = faker.helpers.arrayElement([
    'provideDaffCart',
    'provideDaffProduct',
    'provideDaffCustomer',
    'provideDaffAuth',
  ]);
  deprecated = faker.datatype.boolean() ? faker.lorem.sentence() : '';

  typeParameters = '';
  parameterDocs = [
    {
      name: 'config',
      defaultValue: '{}',
      isOptional: true,
      isRestParam: false,
      type: 'Config',
      description: 'Configuration options',
    },
  ];
  type = 'Provider[]';
  token = {
    label: faker.helpers.arrayElement(['DAFF_CART_CONFIG', 'DAFF_AUTH_CONFIG', 'CUSTOM_TOKEN']),
    path: `/${faker.helpers.slugify(faker.lorem.words(2))}`,
  };
}

/**
 * Factory for creating DaffApiProviderDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiProviderDocFactory extends DaffModelFactory<DaffApiProviderDoc, typeof MockDaffApiProviderDoc> {
  constructor() {
    super(MockDaffApiProviderDoc);
  }
}
