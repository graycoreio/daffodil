import { Document } from 'dgeni';
import { ClassExportDoc } from 'dgeni-packages/typescript/api-doc-types/ClassExportDoc';
import type { ClassLikeExportDoc } from 'dgeni-packages/typescript/api-doc-types/ClassLikeExportDoc';
import type { ConstExportDoc } from 'dgeni-packages/typescript/api-doc-types/ConstExportDoc';
import type { FunctionExportDoc } from 'dgeni-packages/typescript/api-doc-types/FunctionExportDoc';
import { MethodMemberDoc } from 'dgeni-packages/typescript/api-doc-types/MethodMemberDoc';
import { PropertyMemberDoc } from 'dgeni-packages/typescript/api-doc-types/PropertyMemberDoc';
import { TypeFlags } from 'typescript';

import {
  DaffApiConstant,
  DaffApiDirective,
  DaffApiDirectiveInputDoc,
  DaffApiDoc,
  DaffApiDocBase,
  DaffApiService,
  DaffApiType,
  DaffDocsApiClass,
  DaffDocsApiClassProperty,
  DaffDocsApiDecorator,
  DaffDocsApiFunction,
  DaffDocsApiFunctionParam,
  DaffDocsApiHeritageInfo,
  DaffDocsApiRole,
  DaffDocsApiType,
  DaffDocsApiTypeMethod,
  DaffDocsApiTypeProperty,
  daffDocsGetRoleFromTsDoc,
  DaffDocsTsDocument,
  daffDocsApiParseHostDirective,
  daffDocsApiParseHostDirectiveField,
  DaffDocsApiHostDirective,
} from '@daffodil/docs-utils';

import { InlineTagProcessor } from './inline-tag-processor';
import {
  MARKDOWN_CODE_PROCESSOR_NAME,
  MarkdownCodeProcessor,
} from '../../../processors/markdown';
import { createRef } from '../../../utils/create-ref';
import { FilterableProcessor } from '../../../utils/filterable-processor.type';
import { linkSymbols } from '../../../utils/link-symbols';
import {
  serializeFactory,
  arraySerializer,
  SerializableDoc,
  Serializer,
} from '../../../utils/serialize';

export const ROLE_PROCESSOR_NAME = 'role';

export class RoleProcessor implements FilterableProcessor {
  readonly name = ROLE_PROCESSOR_NAME;
  readonly $runAfter = ['paths-absolutified'];
  readonly $runBefore = ['rendering-docs', MARKDOWN_CODE_PROCESSOR_NAME];

  docTypes = [];
  readonly symbolSerialize: Serializer<string> = linkSymbols;
  readonly markdownSerialize: Serializer<string> = (str: string): string => str ? this.markdown.parse(str) : '';

  readonly baseSerialize = serializeFactory<DaffApiDocBase>(
    [
      'id',
      'title',
      'breadcrumbs',
      'kind',
      'tableOfContents',
      'docType',
      'role',
      'examples',
      'importExample',
      'sourceApiBlock',
      'slug',
      'name',
      'deprecated',
    ],
    {
      description: this.markdownSerialize,
    },
  );

  readonly decoratorSerialize = serializeFactory<DaffDocsApiDecorator>(
    [
      'argumentInfo',
      'arguments',
      'isCallExpression',
      'name',
    ],
  );

  readonly heritageInfoSerialize = serializeFactory<DaffDocsApiHeritageInfo>(
    [
      'text',
    ],
  );

  readonly functionParamSerialize = serializeFactory<DaffDocsApiFunctionParam>(
    [
      'name',
      'defaultValue',
      'isOptional',
      'isRestParam',
    ],
    {
      type: this.symbolSerialize,
      description: this.markdownSerialize,
    },
  );

  readonly functionSerialize = serializeFactory<DaffDocsApiFunction>(
    [
      'typeParameters',
    ],
    {
      parameterDocs: arraySerializer(this.functionParamSerialize),
      type: this.symbolSerialize,
      description: this.markdownSerialize,
    },
    [
      this.baseSerialize,
    ],
  );

  readonly propSerialize = serializeFactory<DaffDocsApiTypeProperty>(
    [
      'name',
      'accessibility',
      'aliases',
      'isAbstract',
      'isStatic',
      'isReadonly',
      'isOptional',
      'isGetAccessor',
      'isSetAccessor',
      'deprecated',
      'inheritedFrom',
    ],
    {
      decorators: arraySerializer(this.decoratorSerialize),
      type: this.symbolSerialize,
      description: this.markdownSerialize,
    },
  );

  readonly classPropSerialize = serializeFactory<DaffDocsApiClassProperty>(
    [
      'default',
    ],
    {},
    [
      this.propSerialize,
    ],
  );

  readonly methodSerialize = serializeFactory<DaffDocsApiTypeMethod>(
    [
      'name',
      'accessibility',
      'aliases',
      'isAbstract',
      'isStatic',
      'isReadonly',
      'isOptional',
      'isGetAccessor',
      'isSetAccessor',
      'deprecated',
      'inheritedFrom',
    ],
    {
      decorators: arraySerializer(this.decoratorSerialize),
    },
    [
      this.functionSerialize,
    ],
  );

  readonly typeSerialize = serializeFactory<DaffApiType>(
    [
      'name',
      'typeParams',
    ],
    {
      props: arraySerializer(this.propSerialize),
      methods: arraySerializer(this.methodSerialize),
      decorators: arraySerializer(this.decoratorSerialize),
      extendsClauses: arraySerializer(this.heritageInfoSerialize),
      implementsClauses: arraySerializer(this.heritageInfoSerialize),
    },
    [
      this.baseSerialize,
    ],
  );

  readonly constSerialize = serializeFactory<DaffApiConstant>(
    [
      'name',
    ],
    {
      type: this.symbolSerialize,
    },
    [
      this.baseSerialize,
    ],
  );

  readonly classSerialize = serializeFactory<DaffDocsApiClass>(
    [
      'isAbstract',
    ],
    {
      props: arraySerializer(this.classPropSerialize),
      constructorDoc: this.methodSerialize,
    },
    [
      this.typeSerialize,
    ],
  );

  readonly serviceSerialize: Serializer<DaffApiService> = (doc: DaffApiService) => {
    const serializedType = this.classSerialize(doc);
    return {
      ...serializedType,
      decorators: serializedType.decorators.filter(({ name }) => name !== 'Injectable'),
      providedIn: doc.providedIn,
    };
  };

  readonly inputSerialize = serializeFactory<DaffApiDirectiveInputDoc>(
    [
      'required',
    ],
    {},
    [
      this.classPropSerialize,
    ],
  );

  readonly directiveSerialize = serializeFactory<DaffApiDirective>(
    [
      'selector',
      'hostDirectives',
    ],
    {
      inputs: arraySerializer(this.inputSerialize),
      outputs: arraySerializer(this.propSerialize),
    },
    [
      this.classSerialize,
    ],
  );

  constructor(
    private markdown: MarkdownCodeProcessor,
    private inlineTagProcessor: InlineTagProcessor,
    private aliasMap,
  ) {}

  $process(docs: Array<Document>): Array<Document> {
    return docs.map(doc => {
      if (this.docTypes.includes(doc.docType)) {
        if (!doc.role) {
          doc.role = daffDocsGetRoleFromTsDoc(doc);
        }
        this.addFields(doc);
      }
      return doc;
    });
  }


  type(doc: SerializableDoc & DaffApiType & ClassLikeExportDoc): SerializableDoc & DaffApiType {
    doc.serializer = this.typeSerialize;
    this.inlineTagProcessor.$process(doc.members || []);
    doc.props = <any>doc.members
      ?.filter((member) => member instanceof PropertyMemberDoc)
      .map((prop) => {
        const inferredType = prop.typeChecker.getTypeAtLocation(prop.declaration);
        // eslint-disable-next-line no-bitwise
        prop.type = inferredType.getFlags() & TypeFlags.Any ? prop.type : prop.typeChecker.typeToString(inferredType);
        return prop;
      }) || [];
    doc.methods = <any>doc.members
      ?.filter((member) => member instanceof MethodMemberDoc)
      .map((method) => {
        if (!method.type) {
          const ret = method.typeChecker.getReturnTypeOfSignature(<any>method);
          method.type = method.typeChecker.typeToString(ret);
        }
        (<Map<string, Array<{
          name: string;
          description: string;
        }>>>(<any>method).tags.tagsByName).get('param')?.forEach((tag) => {
          const param = method.parameterDocs.find(({ name }) => name === tag.name);
          if (param && !param.description) {
            param.description = tag.description;
          }
        });
        this.inlineTagProcessor.$process(method.parameterDocs);
        return method;
      }) || [];
    return doc;
  };

  klass(doc: SerializableDoc & DaffDocsApiClass & ClassExportDoc): SerializableDoc & DaffDocsApiClass {
    this.type(doc);
    doc.serializer = this.classSerialize;
    doc.props.forEach((prop) => {
      prop.default = (<any>prop).declaration?.initializer?.getText();
    });
    return doc;
  };

  service(doc: SerializableDoc & DaffApiService & ClassExportDoc): SerializableDoc & DaffApiService {
    this.klass(doc);
    doc.serializer = this.serviceSerialize;
    doc.providedIn = doc.decorators.find(({ name }) => name === 'Injectable').argumentInfo[0]?.['providedIn'] || '';
    return doc;
  };

  directive(doc: SerializableDoc & DaffApiDirective & ClassExportDoc): SerializableDoc & DaffApiDirective {
    this.klass(<any>doc);
    doc.serializer = this.directiveSerialize;
    const directiveArg: any = doc.decorators[0].argumentInfo[0];
    doc.inputs = [];
    doc.outputs = [];
    doc.selector = directiveArg.selector;
    doc.hostDirectives = (<Array<string>>directiveArg.hostDirectives)
      ?.map(daffDocsApiParseHostDirective)
      .map<DaffDocsApiHostDirective>(({ directive, inputs, outputs }) => ({
        directive: createRef(directive),
        inputs: inputs ? JSON.parse(inputs.replaceAll('\'', '\"')).map(daffDocsApiParseHostDirectiveField) : [],
        outputs: outputs ? JSON.parse(outputs.replaceAll('\'', '\"')).map(daffDocsApiParseHostDirectiveField) : [],
      })) || [];
    doc.hostDirectives.forEach((hostDirective) => {
      const directiveDoc = this.aliasMap.getDocs(hostDirective.directive.label)[0];
      if (directiveDoc) {
        hostDirective.inputs.forEach((input) => {
          const parentInput = directiveDoc.members.find((member) => member.name === input.parentField || input.field);
          if (parentInput) {
            doc.inputs.push({
              ...parentInput,
              name: input.field,
              required: !parentInput.isOptional,
              inheritedFrom: hostDirective.directive,
            });
          }
        });
        hostDirective.outputs.forEach((output) => {
          const parentOutput = directiveDoc.members.find((member) => member.name === output.parentField || output.field);
          if (parentOutput) {
            doc.outputs.push({
              ...parentOutput,
              name: output.field,
              required: !parentOutput.isOptional,
              inheritedFrom: hostDirective.directive,
            });
          }
        });
      }
    });
    // TODO: support signals
    doc.props = doc.props.reduce((acc, prop) => {
      if (prop.decorators?.find(({ name }) => name === 'Input')) {
        doc.inputs.push({
          ...prop,
          required: !prop.isOptional,
        });
      } else if (prop.decorators?.find(({ name }) => name === 'Output')) {
        doc.outputs.push(prop);
      } else {
        acc.push(prop);
      }
      return acc;
    }, []);
    return doc;
  };

  func(doc: SerializableDoc & DaffDocsApiFunction & FunctionExportDoc): SerializableDoc & DaffDocsApiFunction {
    doc.serializer = this.functionSerialize;
    if (!doc.type) {
      const ret = doc.typeChecker.getReturnTypeOfSignature(<any>doc);
      doc.type = doc.typeChecker.typeToString(ret);
    }
    return doc;
  };

  constant(doc: SerializableDoc & DaffApiConstant & ConstExportDoc): SerializableDoc & DaffApiConstant {
    doc.serializer = this.constSerialize;
    doc.type = doc.typeChecker.typeToString(doc.typeChecker.getTypeAtLocation(doc.variableDeclaration)) || doc.type;
    return doc;
  };

  addFields(doc: SerializableDoc & DaffApiDoc & DaffDocsTsDocument): SerializableDoc & DaffApiDoc {
    switch (doc.role) {
      case DaffDocsApiRole.COMPONENT:
        this.directive(<any>doc);
        return doc;

      case DaffDocsApiRole.DIRECTIVE:
        this.directive(<any>doc);
        return doc;

      case DaffDocsApiRole.PIPE:
        this.klass(<any>doc);
        return doc;

      case DaffDocsApiRole.SERVICE:
        this.service(<any>doc);
        return doc;

      case DaffDocsApiRole.MODULE:
        this.klass(<any>doc);
        return doc;

      case DaffDocsApiRole.GUARD:
        if (doc.docType === DaffDocsApiType.CLASS) {
          this.service(<any>doc);
        } else {
          this.func(<any>doc);
        }
        return doc;

      case DaffDocsApiRole.RESOLVER:
        if (doc.docType === DaffDocsApiType.CLASS) {
          this.service(<any>doc);
        } else {
          this.func(<any>doc);
        }
        return doc;

      case DaffDocsApiRole.REDUCER:
        this.func(<any>doc);
        return doc;

      case DaffDocsApiRole.ACTION:
        this.klass(<any>doc);
        return doc;

      case DaffDocsApiRole.FACADE:
        this.service(<any>doc);
        return doc;

      case DaffDocsApiRole.SELECTOR:
        this.func(<any>doc);
        return doc;

      case DaffDocsApiRole.PROVIDER:
        this.func(<any>doc);
        return doc;

      case DaffDocsApiRole.OPERATOR:
        this.func(<any>doc);
        return doc;

      case DaffDocsApiRole.ERROR:
        this.klass(<any>doc);
        return doc;

      case DaffDocsApiRole.TOKEN:
        this.constant(<any>doc);
        return doc;

      case DaffDocsApiRole.TYPE:
        this.type(<any>doc);
        return doc;

      case DaffDocsApiRole.CONSTANT:
        this.constant(<any>doc);
        return doc;

      case DaffDocsApiRole.HELPER:
        if (doc.docType === DaffDocsApiType.CLASS) {
          this.klass(<any>doc);
        } else {
          this.func(<any>doc);
        }
        return doc;

      case DaffDocsApiRole.MODEL_FACTORY:
        this.klass(<any>doc);
        return doc;

      case DaffDocsApiRole.MOCK:
        this.klass(<any>doc);
        return doc;
    }
  };
};

export const ROLE_PROVIDER = <const>[
  ROLE_PROCESSOR_NAME,
  (markdown: MarkdownCodeProcessor, inlineTagProcessorForRealz: InlineTagProcessor, aliasMap) => new RoleProcessor(markdown, inlineTagProcessorForRealz, aliasMap),
];
