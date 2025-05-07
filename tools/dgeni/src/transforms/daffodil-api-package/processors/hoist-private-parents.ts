import { Document } from 'dgeni';
import { ClassExportDoc } from 'dgeni-packages/typescript/api-doc-types/ClassExportDoc';
import { HeritageInfo } from 'dgeni-packages/typescript/api-doc-types/ClassLikeExportDoc';
import { InterfaceExportDoc } from 'dgeni-packages/typescript/api-doc-types/InterfaceExportDoc';

import { DaffDocsApiType } from '@daffodil/docs-utils';

import { FilterableProcessor } from '../../../utils/filterable-processor.type';

export const HOIST_PRIVATE_PARENTS_PROCESSOR_NAME = 'hoistPrivateParents';

/**
 * Adds members from parents not in the public API to subclasses.
 */
export class HoistPrivateParentsProcessor implements FilterableProcessor {
  readonly name = HOIST_PRIVATE_PARENTS_PROCESSOR_NAME;
  readonly $runAfter = ['readTypeScriptModules'];
  readonly $runBefore = ['parsing-tags', 'extracting-tags'];

  docTypes: Array<string> = [DaffDocsApiType.CLASS, DaffDocsApiType.INTERFACE];

  constructor(
    private parseTagsProcessor,
  ) {}

  $process(docs: Array<Document>): Array<Document> {
    return docs.map((doc) => {
      if (this.docTypes.includes(doc.docType)) {
        const field = DaffDocsApiType.CLASS ? 'extendsClauses' : 'implementsClauses';
        const DocConstructor = DaffDocsApiType.CLASS ? ClassExportDoc : InterfaceExportDoc;
        doc[field] = doc[field]?.reduce((acc, parent: HeritageInfo) => {
          if (!parent.doc && parent.symbol?.valueDeclaration) {
            const parentDoc = new DocConstructor(
              doc.host,
              doc.moduleDoc,
              parent.symbol,
            );
            this.parseTagsProcessor.$process(parentDoc.members);
            doc.members.push(...parentDoc.members);
          } else {
            acc.push(parent);
          }

          return acc;
        }, []);
      }
      return doc;
    });
  }
}

export const HOIST_PRIVATE_PARENTS_PROCESSOR_PROVIDER = <const>[
  HOIST_PRIVATE_PARENTS_PROCESSOR_NAME,
  (parseTagsProcessor) => new HoistPrivateParentsProcessor(parseTagsProcessor),
];
