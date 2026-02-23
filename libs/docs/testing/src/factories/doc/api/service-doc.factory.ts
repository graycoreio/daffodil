import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiServiceDoc,
  DaffDocsApiRole,
  DaffDocsApiType,
  DaffDocKind,
} from '@daffodil/docs-utils';

/**
 * Mock DaffApiServiceDoc object.
 */
export class MockDaffApiServiceDoc implements DaffApiServiceDoc {
  id = faker.string.uuid();
  title = faker.lorem.words(3);
  breadcrumbs = [];
  kind = DaffDocKind.API;
  contents = faker.lorem.paragraphs(2);
  tableOfContents = [];
  docType = DaffDocsApiType.CLASS;
  role = <DaffDocsApiRole.SERVICE>DaffDocsApiRole.SERVICE;
  examples = [];
  description = faker.lorem.paragraph();
  importExample = `import { ${faker.lorem.word()} } from '@daffodil/${faker.lorem.word()}';`;
  sourceApiBlock = faker.lorem.paragraph();
  slug = faker.helpers.slugify(faker.lorem.words(2));
  name = faker.helpers.arrayElement([
    'DaffCartService',
    'DaffProductService',
    'DaffCustomerService',
    'DaffOrderService',
  ]);
  deprecated = faker.datatype.boolean() ? faker.lorem.sentence() : '';
  typeParams = '';
  props = [];
  methods = [];
  decorators = [];
  extendsClauses = [];
  implementsClauses = [];

  isAbstract = faker.datatype.boolean();
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
    description: 'Constructor for the service',
    type: 'void',
    deprecated: '',
  };
  providedIn = faker.helpers.arrayElement(['root', 'platform', 'any', 'null']);
}

/**
 * Factory for creating DaffApiServiceDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiServiceDocFactory extends DaffModelFactory<DaffApiServiceDoc, typeof MockDaffApiServiceDoc> {
  constructor() {
    super(MockDaffApiServiceDoc);
  }
}
