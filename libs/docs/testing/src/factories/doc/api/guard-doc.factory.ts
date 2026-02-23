import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffDocsApiRole,
  DaffDocsApiType,
  DaffDocKind,
} from '@daffodil/docs-utils';

/**
 * Mock DaffApiGuardDoc object.
 */
export class MockDaffApiGuardDoc {
  id = faker.string.uuid();
  title = faker.lorem.words(3);
  breadcrumbs = [];
  kind = DaffDocKind.API;
  contents = faker.lorem.paragraphs(2);
  tableOfContents = [];
  docType = DaffDocsApiType.CLASS;
  role = <DaffDocsApiRole.GUARD>DaffDocsApiRole.GUARD;
  examples = [];
  description = faker.lorem.paragraph();
  importExample = `import { ${faker.lorem.word()} } from '@daffodil/${faker.lorem.word()}';`;
  sourceApiBlock = faker.lorem.paragraph();
  slug = faker.helpers.slugify(faker.lorem.words(2));
  name = faker.helpers.arrayElement([
    'DaffAuthGuard',
    'DaffCartGuard',
    'DaffCustomerGuard',
    'DaffAdminGuard',
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
    description: 'Constructor for the guard',
    type: 'void',
    deprecated: '',
  };
}

/**
 * Factory for creating DaffApiGuardDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiGuardDocFactory extends DaffModelFactory<any, typeof MockDaffApiGuardDoc> {
  constructor() {
    super(MockDaffApiGuardDoc);
  }
}
