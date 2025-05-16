import { Document } from 'dgeni';
import { slugify } from 'markdown-toc';

import {
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
  DAFF_DOCS_DESIGN_PATH,
  DAFF_DOCS_PATH,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { FilterableProcessor } from '../../../utils/filterable-processor.type';

export interface ParentedDocument extends Document {
  parent?: ParentedDocument;
}

export const CANONICAL_PATH_PROCESSOR_NAME = 'canonicalPath';

/**
 * Adds canonical paths for design component API.
 */
export class CanonicalPathProcessor implements FilterableProcessor {
  readonly name = CANONICAL_PATH_PROCESSOR_NAME;
  readonly $runAfter = ['paths-computed'];
  readonly $runBefore = ['absolutify-paths'];

  docTypes: Array<string> = [];

  $process(docs: Array<Document>): Array<Document> {
    return docs.map((doc) => {
      if (this.docTypes.includes(doc.docType)) {
        const mod = doc.originalModule.match(/(.+)\/src\/.+/)?.[1];
        if (mod) {
          doc.canonicalPath = `/${DAFF_DOCS_PATH}/${DAFF_DOCS_DESIGN_PATH}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.COMPONENT]}/${mod}?tab=api-tab#${slugify(doc.name)}`;
        }
      }
      return doc;
    });
  }
}

export const CANONICAL_PATH_PROCESSOR_PROVIDER = <const>[
  CANONICAL_PATH_PROCESSOR_NAME,
  () => new CanonicalPathProcessor(),
];
