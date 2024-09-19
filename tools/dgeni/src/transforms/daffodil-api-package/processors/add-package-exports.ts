import {
  Processor,
  Document,
} from 'dgeni';

import { getPackageInfo } from '../helpers/generateApiList';

export const ADD_PACKAGE_EXPORTS_PROCESSOR_NAME = 'addPackageExports';

/**
 * Adds exports info to API packages.
 */
export class AddPackageExportsProcessor implements Processor {
  readonly name = ADD_PACKAGE_EXPORTS_PROCESSOR_NAME;
  readonly $runAfter = ['docs-processed', 'addSubpackageExports'];
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

export const ADD_PACKAGE_EXPORTS_PROCESSOR_PROVIDER = <const>[
  ADD_PACKAGE_EXPORTS_PROCESSOR_NAME,
  () => new AddPackageExportsProcessor(),
];
