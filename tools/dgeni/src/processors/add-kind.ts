import { Document } from 'dgeni';

import {
  DaffDocKind,
  daffDocsGetKind,
} from '@daffodil/docs-utils';

import { FilterableProcessor } from '../utils/filterable-processor.type';

/**
 * A dgeni document which has had the doc kind added.
 */
export interface KindedDocument extends Document {
  kind: DaffDocKind;
}

export const ADD_KIND_PROCESSOR_NAME = 'addKind';

/**
 * Adds doc kind based on file path.
 */
export class AddKindProcessor implements FilterableProcessor {
  readonly name = ADD_KIND_PROCESSOR_NAME;
  readonly $runAfter = ['files-read'];
  readonly $runBefore = ['processing-docs'];

  docTypes = [];

  $process(docs: Array<Document>): Array<KindedDocument> {
    return docs.map((doc) => {
      if (this.docTypes.includes(doc.docType)) {
        doc.kind = daffDocsGetKind(doc.fileInfo.filePath);
      }
      return doc;
    });
  }
}

export const ADD_KIND_PROCESSOR_PROVIDER = <const>[
  ADD_KIND_PROCESSOR_NAME,
  () => new AddKindProcessor(),
];
