import {
  Processor,
  Document,
} from 'dgeni';

import { getPackageInfo } from '../helpers/generateApiList';

/**
 * Adds exports info to API packages.
 */
export class AddPackageExportsProcessor implements Processor {
  readonly name = 'removeDuplicates';
  readonly $runAfter = ['docs-processed'];
  readonly $runBefore = ['rendering-docs'];

  docTypes = ['package'];

  $process(docs: Array<Document>): Array<Document> {
    return docs.map((doc) => {
      if (this.docTypes.includes(doc.docType)) {
        doc.data = getPackageInfo(doc);
      }
      return doc;
    });
  }
}
