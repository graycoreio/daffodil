import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiErrorDoc,
  DaffDocsApiRole,
  DaffDocsApiType,
  DaffDocKind,
} from '@daffodil/docs-utils';

/**
 * Mock DaffApiErrorDoc object.
 */
export class MockDaffApiErrorDoc implements DaffApiErrorDoc {
  id = faker.string.uuid();
  title = faker.lorem.words(3);
  breadcrumbs = [];
  kind = DaffDocKind.API;
  contents = faker.lorem.paragraphs(2);
  tableOfContents = [];
  docType = DaffDocsApiType.CLASS;
  role = <DaffDocsApiRole.ERROR>DaffDocsApiRole.ERROR;
  examples = [];
  description = faker.lorem.paragraph();
  importExample = `import { ${faker.lorem.word()} } from '@daffodil/${faker.lorem.word()}';`;
  sourceApiBlock = faker.lorem.paragraph();
  slug = faker.helpers.slugify(faker.lorem.words(2));
  name = faker.helpers.arrayElement([
    'DaffCartNotFoundError',
    'DaffProductUnavailableError',
    'DaffCustomerNotFoundError',
    'DaffPaymentFailedError',
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
    description: 'Constructor for the error',
    type: 'void',
    deprecated: '',
  };
  code = faker.helpers.arrayElement(['CART_001', 'PRODUCT_404', 'AUTH_403', 'PAYMENT_500']);
}

/**
 * Factory for creating DaffApiErrorDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiErrorDocFactory extends DaffModelFactory<DaffApiErrorDoc, typeof MockDaffApiErrorDoc> {
  constructor() {
    super(MockDaffApiErrorDoc);
  }
}
