import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffApiDirectiveDoc,
  DaffDocsApiRole,
  DaffDocsApiType,
  DaffDocKind,
} from '@daffodil/docs-utils';

/**
 * Mock DaffApiDirectiveDoc object.
 */
export class MockDaffApiDirectiveDoc implements DaffApiDirectiveDoc {
  id = faker.string.uuid();
  title = faker.lorem.words(3);
  breadcrumbs = [];
  kind = DaffDocKind.API;
  contents = faker.lorem.paragraphs(2);
  tableOfContents = [];
  docType = DaffDocsApiType.CLASS;
  role = <DaffDocsApiRole.DIRECTIVE>DaffDocsApiRole.DIRECTIVE;
  examples = [];
  description = faker.lorem.paragraph();
  importExample = `import { ${faker.lorem.word()} } from '@daffodil/${faker.lorem.word()}';`;
  sourceApiBlock = faker.lorem.paragraph();
  slug = faker.helpers.slugify(faker.lorem.words(2));
  name = faker.helpers.arrayElement([
    'DaffButtonDirective',
    'DaffFocusDirective',
    'DaffTooltipDirective',
    'DaffHighlightDirective',
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
    description: 'Constructor for the directive',
    type: 'void',
    deprecated: '',
  };
  selector = faker.helpers.arrayElement([
    '[daffButton]',
    '[daffFocus]',
    '[daffTooltip]',
    '[daffHighlight]',
    '.daff-directive',
  ]);
  inputs = [];
  outputs = [];
  hostDirectives = [];
}

/**
 * Factory for creating DaffApiDirectiveDoc objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffApiDirectiveDocFactory extends DaffModelFactory<DaffApiDirectiveDoc, typeof MockDaffApiDirectiveDoc> {
  constructor() {
    super(MockDaffApiDirectiveDoc);
  }
}
