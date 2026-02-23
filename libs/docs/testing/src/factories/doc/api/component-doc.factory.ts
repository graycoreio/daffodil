import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiComponentDoc,
  DaffDocsApiRole,
  DaffDocsApiType,
  DaffDocKind,
} from '@daffodil/docs-utils';

/**
 * Mock DaffApiComponentDoc object.
 */
export class MockDaffApiComponentDoc implements DaffApiComponentDoc {
  id = faker.string.uuid();
  title = faker.lorem.words(3);
  breadcrumbs = [];
  kind = DaffDocKind.API;
  contents = faker.lorem.paragraphs(2);
  tableOfContents = [];
  docType = DaffDocsApiType.CLASS;
  role = <DaffDocsApiRole.COMPONENT>DaffDocsApiRole.COMPONENT;
  examples = [];
  description = faker.lorem.paragraph();
  importExample = `import { ${faker.lorem.word()} } from '@daffodil/${faker.lorem.word()}';`;
  sourceApiBlock = faker.lorem.paragraph();
  slug = faker.helpers.slugify(faker.lorem.words(2));
  name = faker.helpers.arrayElement([
    'DaffButtonComponent',
    'DaffCardComponent',
    'DaffModalComponent',
    'DaffNavbarComponent',
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
    description: 'Constructor for the component',
    type: 'void',
    deprecated: '',
  };
  selector = faker.helpers.arrayElement([
    'daff-button',
    'daff-card',
    'daff-modal',
    '[daffButton]',
    '.daff-component',
  ]);
  inputs = [];
  outputs = [];
  hostDirectives = [];
}

/**
 * Factory for creating DaffApiComponentDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiComponentDocFactory extends DaffModelFactory<DaffApiComponentDoc, typeof MockDaffApiComponentDoc> {
  constructor() {
    super(MockDaffApiComponentDoc);
  }
}
