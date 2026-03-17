import { Document } from 'dgeni';

import { DaffDocsApiType } from '@daffodil/docs-utils';

import { FilterableProcessor } from '../utils/filterable-processor.type';

export const NORMALIZE_IDS_PROCESSOR_NAME = 'normalizeIds';

/**
 * Converts paths to absolute if they are not already.
 */
export class NormalizeIdsProcessor implements FilterableProcessor {
  readonly name = NORMALIZE_IDS_PROCESSOR_NAME;
  readonly $runAfter = ['computeIdsProcessor'];
  readonly $runBefore = ['ids-computed'];

  docTypes: Array<string> = [DaffDocsApiType.PACKAGE];

  $process(docs: Array<Document>): Array<Document> {
    return docs.map((doc) => {
      doc.id = doc.id.replace(`${doc.fileInfo?.basePath || doc.basePath}/`, '');
      return doc;
    });
  }
}

export const NORMALIZE_IDS_PROCESSOR_PROVIDER = <const>[
  NORMALIZE_IDS_PROCESSOR_NAME,
  () => new NormalizeIdsProcessor(),
];
