import { Document } from 'dgeni';
import { ClassExportDoc } from 'dgeni-packages/typescript/api-doc-types/ClassExportDoc';
import { HeritageInfo } from 'dgeni-packages/typescript/api-doc-types/ClassLikeExportDoc';

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

  docTypes: Array<string> = [DaffDocsApiType.CLASS];

  constructor(
    private parseTagsProcessor,
  ) {}

  $process(docs: Array<Document>): Array<Document> {
    return docs.map((doc) => {
      if (this.docTypes.includes(doc.docType)) {
        doc.extendsClauses = doc.extendsClauses?.reduce((acc, parent: HeritageInfo) => {
          if (!parent.doc && parent.symbol?.valueDeclaration) {
            const parentDoc = new ClassExportDoc(
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
