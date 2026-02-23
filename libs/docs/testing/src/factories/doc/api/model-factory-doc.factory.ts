import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiModelFactoryDoc,
  DaffDocsApiRole,
  DaffDocsApiType,
  DaffDocKind,
} from '@daffodil/docs-utils';

/**
 * Mock DaffApiModelFactoryDoc object.
 */
export class MockDaffApiModelFactoryDoc implements DaffApiModelFactoryDoc {
  id = faker.string.uuid();
  title = faker.lorem.words(3);
  breadcrumbs = [];
  kind = DaffDocKind.API;
  contents = faker.lorem.paragraphs(2);
  tableOfContents = [];
  docType = DaffDocsApiType.CLASS;
  role = <DaffDocsApiRole.MODEL_FACTORY>DaffDocsApiRole.MODEL_FACTORY;
  examples = [];
  description = faker.lorem.paragraph();
  importExample = `import { ${faker.lorem.word()} } from '@daffodil/${faker.lorem.word()}';`;
  sourceApiBlock = faker.lorem.paragraph();
  slug = faker.helpers.slugify(faker.lorem.words(2));
  name = faker.helpers.arrayElement([
    'DaffCartFactory',
    'DaffProductFactory',
    'DaffCustomerFactory',
    'DaffOrderFactory',
  ]);
  deprecated = faker.datatype.boolean() ? faker.lorem.sentence() : '';

  typeParams = '';
  props = [];
  methods = [];
  decorators = [];
  extendsClauses = [];
  implementsClauses = [];

  isAbstract = false;
  constructorDoc = {
    name: 'constructor',
    accessibility: 'public',
    aliases: [],
    isAbstract: false,
    isStatic: false,
    isReadonly: false,
    isOptional: false,
    isGetAccessor: false,
    isSetAccessor: false,
    typeParameters: '',
    decorators: [],
    parameterDocs: [],
    description: 'Constructor for the factory',
    type: 'void',
    deprecated: '',
  };
  model = {
    label: faker.helpers.arrayElement(['DaffCart', 'DaffProduct', 'DaffCustomer', 'DaffOrder']),
    path: `/${faker.helpers.slugify(faker.lorem.words(2))}`,
  };
}

/**
 * Factory for creating DaffApiModelFactoryDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiModelFactoryDocFactory extends DaffModelFactory<DaffApiModelFactoryDoc, typeof MockDaffApiModelFactoryDoc> {
  constructor() {
    super(MockDaffApiModelFactoryDoc);
  }
}
