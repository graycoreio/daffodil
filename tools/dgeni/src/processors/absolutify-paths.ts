import { Document } from 'dgeni';

import { FilterableProcessor } from '../utils/filterable-processor.type';

export interface PathedDocument extends Document {
  path: string;
}

export const ABSOLUTIFY_PATHS_PROCESSOR_NAME = 'absolutifyPaths';

/**
 * Converts paths to absolute if they are not already.
 */
export class AbsolutifyPathsProcessor implements FilterableProcessor {
  readonly name = ABSOLUTIFY_PATHS_PROCESSOR_NAME;
  readonly $runAfter = ['absolutify-paths'];
  readonly $runBefore = ['paths-absolutified'];

  docTypes = ['package'];

  $process(docs: Array<PathedDocument>): Array<PathedDocument> {
    return docs.map((doc) => {
      if (this.docTypes.includes(doc.docType) && doc.path[0] !== '/') {
        doc.path = `/${doc.path}`;
      }
      return doc;
    });
  }
}

export const ABSOLUTIFY_PATHS_PROCESSOR_PROVIDER = <const>[
  ABSOLUTIFY_PATHS_PROCESSOR_NAME,
  () => new AbsolutifyPathsProcessor(),
];
