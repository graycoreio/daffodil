import { Document } from 'dgeni';

import { MARKDOWN_CODE_PROCESSOR_NAME } from './markdown';
import { FilterableProcessor } from '../utils/filterable-processor.type';

export const LONG_DESCRIPTION_PROCESSOR_NAME = 'longDescription';

/**
 * Pulls the first line of the content out and stores it in the `longDescription` field.
 */
export class LongDescriptionProcessor implements FilterableProcessor {
  readonly name = LONG_DESCRIPTION_PROCESSOR_NAME;
  readonly $runAfter = ['paths-absolutified'];
  readonly $runBefore = ['rendering-docs', MARKDOWN_CODE_PROCESSOR_NAME];

  docTypes = [];

  $process(docs: Array<Document>): Array<Document> {
    return docs.map(doc => {
      if (this.docTypes.includes(doc.docType)) {
        const match = doc.content.match(/# .*\r?\n+(.*)\r?\n*/);
        doc.longDescription = match[1];
        doc.content = doc.content.replace(match[0], '');
      }
      return doc;
    });
  }
};

export const LONG_DESCRIPTION_PROCESSOR_PROVIDER = <const>[
  LONG_DESCRIPTION_PROCESSOR_NAME,
  () => new LongDescriptionProcessor(),
];
