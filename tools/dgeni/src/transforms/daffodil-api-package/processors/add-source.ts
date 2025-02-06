import { Document } from 'dgeni';
import type { ClassExportDoc } from 'dgeni-packages/typescript/api-doc-types/ClassExportDoc';
import type { ConstExportDoc } from 'dgeni-packages/typescript/api-doc-types/ConstExportDoc';
import type { EnumExportDoc } from 'dgeni-packages/typescript/api-doc-types/EnumExportDoc';
import type { FunctionExportDoc } from 'dgeni-packages/typescript/api-doc-types/FunctionExportDoc';
import type { InterfaceExportDoc } from 'dgeni-packages/typescript/api-doc-types/InterfaceExportDoc';
import type { MemberDoc } from 'dgeni-packages/typescript/api-doc-types/MemberDoc';
import { MethodMemberDoc } from 'dgeni-packages/typescript/api-doc-types/MethodMemberDoc';
import { PropertyMemberDoc } from 'dgeni-packages/typescript/api-doc-types/PropertyMemberDoc';
import type { TypeAliasExportDoc } from 'dgeni-packages/typescript/api-doc-types/TypeAliasExportDoc';

import { MARKDOWN_CODE_PROCESSOR_NAME } from '../../../processors/markdown';
import { FilterableProcessor } from '../../../utils/filterable-processor.type';
import { htmlDecodeBrackets } from '../../../utils/html-brackets';

// dgeni does not use `const` for its `docType` class declarations, so they are typed as string
// explicitly add the correct types here so narrowing will work
type ApiDocument =
| (ClassExportDoc & {docType: 'class'})
| (TypeAliasExportDoc & {docType: 'type-alias'})
| (InterfaceExportDoc & {docType: 'interface'})
| (FunctionExportDoc & {docType: 'function'})
| (ConstExportDoc & {docType: 'const'})
| (EnumExportDoc & {docType: 'enum'});

type ClassMember =
| MethodMemberDoc
| PropertyMemberDoc
| MemberDoc;

const TAB_SIZE = 2;

const tab = (amount = 1): string =>
  Array(amount * TAB_SIZE).fill(' ').join('');

const indent = (str: string, amount = 1): string =>
  str.replaceAll(/^(.)/gm, (match) => `${tab(amount)}${match}`);

const getMemberModifiers = (member: MemberDoc): string =>
  `${member.accessibility !== 'public' ? `${member.accessibility} ` : ''}${member.isAbstract ? 'abstract ' : ''}${member.isStatic ? 'static ' : ''}${member.isReadonly ? 'readonly ' : ''}`;

const enumBlock = (doc: EnumExportDoc): string => {
  const members = doc.members.reduce((acc, member) =>
    `${acc}${indent(member.name)} = ${member.type},\n`
  , '\n');

  return `enum ${doc.name} {${members}}`;
};

const interfaceBlock = (doc: InterfaceExportDoc): string => {
  const members = doc.members.reduce((acc, member) =>
    `${acc}${tab()}${getMemberModifiers(member)}${member.name}: ${member.type}\n`
  , '\n');

  return `interface ${doc.name}${doc.typeParams} {${members}}`;
};

const getParameters = (params: Array<string>): string => {
  if (params.length === 0) {
    return '';
  }
  if (params.length === 1) {
    return params[0];
  }

  return params.reduce((acc, param) => `${acc}${indent(param)}\n`, '\n');
};

const functionBlock = (doc: FunctionExportDoc): string => {
  const returnType = doc.type ? `: ${doc.type}` : '';

  if (!returnType) {
    console.warn(`${doc.id} is missing a return type!`);
  }

  return `function ${doc.name}${doc.typeParameters}(${getParameters(doc.parameters)})${returnType}`;
};

const classMember = (doc: ClassMember): string => {
  const decorators = doc.decorators?.length > 0
    ? doc.decorators.reduce((acc, decorator) =>
      `${acc}@${decorator.name}() `
    , '')
    : '';
  if (doc instanceof MethodMemberDoc) {
    const returnType = doc.type ? `: ${doc.type}` : '';

    if (!returnType) {
      console.warn(`${doc.id} is missing a return type!`);
    }

    return `${decorators}${getMemberModifiers(doc)}${doc.name}${doc.typeParameters}(${getParameters(doc.parameters)})${returnType}`;
  } else if (doc instanceof PropertyMemberDoc) {
    const type = doc.type ? `: ${doc.type}` : '';
    if (doc.isGetAccessor || doc.isSetAccessor) {
      let property = decorators;

      if (doc.isGetAccessor) {
        property = `${property ? `${property}\n` : ''}${getMemberModifiers(doc)}get ${doc.name}()${type}`;
      }
      if (doc.isSetAccessor) {
        property = `${property ? `${property}\n` : ''}${getMemberModifiers(doc)}set ${doc.name}(value)${type}`;
      }

      return property;
    }

    return `${decorators}${getMemberModifiers(doc)}${doc.name}${type}`;
  }

  return '';
};

const classBlock = (doc: ClassExportDoc): string => {
  const decorators = doc.decorators?.length > 0
    ? doc.decorators.reduce((acc, decorator) =>
      `${acc}@${decorator.name}()\n`
    , '')
    : '';
  const parents = doc.extendsClauses.length > 0
    ? doc.extendsClauses.reduce((acc, parent, i, ary) =>
      `${acc}${parent.text}${i === ary.length - 1 ? '' : ', '}`
    , ' extends ')
    : '';
  const interfaces = doc.implementsClauses.length > 0
    ? doc.implementsClauses.reduce((acc, parent, i, ary) =>
      `${acc}${parent.text}${i === ary.length - 1 ? '' : ', '}`
    , ' implements ')
    : '';
  const typeParams = doc.typeParams ? `<${doc.typeParams}> ` : '';
  const members = doc.members.length > 0
    ? doc.members.reduce((acc, member) =>
      `${acc}${indent(classMember(member))}\n`
    , '\n')
    : '';

  return `${decorators}${doc.isAbstract ? 'abstract ' : ''}class ${doc.name}${typeParams}${parents}${interfaces} {${members}}`;
};

const typeAliasBlock = (doc: TypeAliasExportDoc): string =>
  `type ${doc.name}${doc.typeParameters} = ${doc.typeDefinition}`;

const constBlock = (doc: ConstExportDoc): string =>
  `const ${doc.name}: ${doc.type}`;

export const ADD_SOURCE_NAME = 'addSource';

export class AddSourceProcessor implements FilterableProcessor {
  readonly name = ADD_SOURCE_NAME;
  readonly $runAfter = ['paths-absolutified'];
  readonly $runBefore = ['rendering-docs', MARKDOWN_CODE_PROCESSOR_NAME];

  docTypes = [];

  private getSourceBlock(doc: ApiDocument): string {
    switch (doc.docType) {
      case 'class':
        return classBlock(doc);

      case 'type-alias':
        return typeAliasBlock(doc);

      case 'interface':
        return interfaceBlock(doc);

      case 'function':
        return functionBlock(doc);

      case 'const':
        return constBlock(doc);

      case 'enum':
        return enumBlock(doc);

      default:
        return '';
    }
  }

  $process(docs: Array<Document>): Array<Document> {
    return docs.map(doc => {
      if (this.docTypes.includes(doc.docType)) {
        doc.sourceApiBlock = htmlDecodeBrackets(this.getSourceBlock(doc));
      }
      return doc;
    });
  }
};

export const ADD_SOURCE_PROVIDER = <const>[
  ADD_SOURCE_NAME,
  () => new AddSourceProcessor(),
];
