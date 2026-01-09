import { Document } from 'dgeni';
import { ClassExportDoc } from 'dgeni-packages/typescript/api-doc-types/ClassExportDoc';
import {
  ClassLikeExportDoc,
  HeritageInfo,
} from 'dgeni-packages/typescript/api-doc-types/ClassLikeExportDoc';
import { InterfaceExportDoc } from 'dgeni-packages/typescript/api-doc-types/InterfaceExportDoc';
import { MemberDoc } from 'dgeni-packages/typescript/api-doc-types/MemberDoc';
import { MethodMemberDoc } from 'dgeni-packages/typescript/api-doc-types/MethodMemberDoc';
import { PropertyMemberDoc } from 'dgeni-packages/typescript/api-doc-types/PropertyMemberDoc';
import { createRef } from 'tools/dgeni/src/utils/create-ref';
import { getDirectiveDecorator } from 'tools/dgeni/src/utils/get-directive-decorator';
import { inferMethodType } from 'tools/dgeni/src/utils/ts/infer-type/method';

import {
  DaffDocsApiHostDirective,
  daffDocsApiParseHostDirective,
  daffDocsApiParseHostDirectiveField,
  DaffDocsApiRef,
  DaffDocsApiType,
} from '@daffodil/docs-utils';

import { FilterableProcessor } from '../../../utils/filterable-processor.type';
import { inferPropType } from '../../../utils/ts/infer-type/prop';

export const HOIST_PRIVATE_PARENTS_PROCESSOR_NAME = 'hoistPrivateParents';

/**
 * Adds members from parents not in the public API to subclasses.
 */
export class HoistPrivateParentsProcessor implements FilterableProcessor {
  readonly name = HOIST_PRIVATE_PARENTS_PROCESSOR_NAME;
  readonly $runAfter = ['readTypeScriptModules'];
  readonly $runBefore = ['parsing-tags', 'extracting-tags'];

  docTypes: Array<string> = [DaffDocsApiType.CLASS, DaffDocsApiType.INTERFACE];
  isPublicApi = (member: MemberDoc): boolean => !member.content.includes('@docs-private') && member.accessibility === 'public';
  transformMember = (member: MemberDoc, doc: Document, ref: DaffDocsApiRef) => {
    (<any>member).default = (<any>member).declaration?.initializer?.getText();
    (<any>member).type = member instanceof PropertyMemberDoc ? inferPropType(member) : inferMethodType(<MethodMemberDoc>member);
    (<any>member).required = !member.isOptional;
    (<any>member).inheritedFrom = ref;
    (<any>member).anchor = `${doc.name}.${member.anchor}`;
    return member;
  };

  constructor(
    private parseTagsProcessor,
    private aliasMap,
  ) {}

  $process(docs: Array<Document>): Array<Document> {
    return docs.map((doc) => {
      if (this.docTypes.includes(doc.docType)) {
        const visit = (d: Document): Array<MemberDoc> => {
          const members = [];
          const field = d.docType === DaffDocsApiType.CLASS ? 'extendsClauses' : 'implementsClauses';
          const DocConstructor = d.docType === DaffDocsApiType.CLASS ? ClassExportDoc : InterfaceExportDoc;
          // parent
          d[field].forEach((parent: HeritageInfo) => {
            let parentDoc: ClassExportDoc | InterfaceExportDoc | ClassLikeExportDoc;
            if (!parent.doc && parent.symbol?.valueDeclaration) {
              parentDoc = new DocConstructor(
                d.host,
                d.moduleDoc,
                parent.symbol,
              );
            } else {
              parentDoc = parent.doc;
            }
            members.push(
              ...parentDoc.members
                .filter(this.isPublicApi)
                .map((member) => this.transformMember(member, doc, { label: parentDoc.name, path: parentDoc.path })),
              ...visit(parentDoc),
            );
          });
          // host directives
          const decorator: any = getDirectiveDecorator(d);
          if (decorator?.argumentInfo[0].hostDirectives) {
            (<Array<string>>decorator.argumentInfo[0].hostDirectives)
              ?.map(daffDocsApiParseHostDirective)
              .map<DaffDocsApiHostDirective>(({ directive, inputs, outputs }) => ({
                directive: createRef(directive),
                inputs: inputs ? JSON.parse(inputs.replaceAll('\'', '"')).map(daffDocsApiParseHostDirectiveField) : [],
                outputs: outputs ? JSON.parse(outputs.replaceAll('\'', '"')).map(daffDocsApiParseHostDirectiveField) : [],
              }))
              .forEach(({ directive, inputs, outputs }) => {
                const directiveDoc = this.aliasMap.getDocs(directive.label)[0] || docs.find(({ name }) => name === directive.label);
                if (directiveDoc) {
                  members.push(
                    ...directiveDoc.members
                      .filter((member) => (inputs.includes(member.name) || outputs.includes(member.name)) && this.isPublicApi(member))
                      .map((member) => this.transformMember(member, doc, directive)),
                    ...visit(directiveDoc),
                  );
                }
              });
          }
          return members;
        };
        doc.members.push(...visit(doc));
        this.parseTagsProcessor.$process(doc.members);
      }
      return doc;
    });
  }
}

export const HOIST_PRIVATE_PARENTS_PROCESSOR_PROVIDER = <const>[
  HOIST_PRIVATE_PARENTS_PROCESSOR_NAME,
  (parseTagsProcessor, aliasMap) => new HoistPrivateParentsProcessor(parseTagsProcessor, aliasMap),
];
