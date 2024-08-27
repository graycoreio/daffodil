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

/**
 * Adds doc kind based on file path.
 */
export class AddKindProcessor implements FilterableProcessor {
  readonly name = 'addKind';
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
