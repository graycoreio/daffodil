import { Document } from 'dgeni';

import { defaultIndexer } from './convertToJson';
import { FilterableProcessor } from '../utils/filterable-processor.type';
import { IndexableDoc } from '../utils/indexable';

export const INDEXABLE_PROCESSOR_NAME = 'indexable';

/**
 * Adds the indexer to each doc.
 */
export class IndexableProcessor implements FilterableProcessor {
  readonly name = INDEXABLE_PROCESSOR_NAME;
  readonly $runAfter = ['paths-absolutified'];
  readonly $runBefore = ['rendering-docs'];

  docTypes = [];
  indexer = defaultIndexer;

  $process(docs: Array<Document & IndexableDoc>): Array<Document & IndexableDoc> {
    return docs.map(doc => {
      if (this.docTypes.includes(doc.docType)) {
        doc.indexer = this.indexer;
      }
      return doc;
    });
  }
};

export const INDEXABLE_PROCESSOR_PROVIDER = <const>[
  INDEXABLE_PROCESSOR_NAME,
  () => new IndexableProcessor(),
];
