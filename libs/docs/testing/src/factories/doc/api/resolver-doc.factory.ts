import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffDocsApiRole,
  DaffDocsApiType,
  DaffDocKind,
} from '@daffodil/docs-utils';

/**
 * Mock DaffApiResolverDoc object.
 */
export class MockDaffApiResolverDoc {

  id = faker.string.uuid();
  title = faker.lorem.words(3);
  breadcrumbs = [];
  kind = DaffDocKind.API;
  contents = faker.lorem.paragraphs(2);
  tableOfContents = [];
  docType = DaffDocsApiType.CLASS;
  role = <DaffDocsApiRole.RESOLVER>DaffDocsApiRole.RESOLVER;
  examples = [];
  description = faker.lorem.paragraph();
  importExample = `import { ${faker.lorem.word()} } from '@daffodil/${faker.lorem.word()}';`;
  sourceApiBlock = faker.lorem.paragraph();
  slug = faker.helpers.slugify(faker.lorem.words(2));
  name = faker.helpers.arrayElement([
    'DaffCartResolver',
    'DaffProductResolver',
    'DaffCustomerResolver',
    'DaffOrderResolver',
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
    description: 'Constructor for the resolver',
    type: 'void',
    deprecated: '',
  };

  providedIn = faker.helpers.arrayElement(['root', 'platform', 'any']);
}

/**
 * Factory for creating DaffApiResolverDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiResolverDocFactory extends DaffModelFactory<any, typeof MockDaffApiResolverDoc> {
  constructor() {
    super(MockDaffApiResolverDoc);
  }
}
