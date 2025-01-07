import {
  Processor,
  Document,
} from 'dgeni';

import { ADD_SUBPACKAGE_EXPORTS_PROCESSOR_NAME } from './add-subpackage-exports';
import { BREADCRUMB_PROCESSOR_NAME } from '../../../processors/breadcrumb';
import { getPackageInfo } from '../helpers/generateApiList';

export const ADD_PACKAGE_EXPORTS_PROCESSOR_NAME = 'addPackageExports';

/**
 * Adds exports info to API packages.
 */
export class AddPackageExportsProcessor implements Processor {
  readonly name = ADD_PACKAGE_EXPORTS_PROCESSOR_NAME;
  readonly $runAfter = ['docs-processed', ADD_SUBPACKAGE_EXPORTS_PROCESSOR_NAME, BREADCRUMB_PROCESSOR_NAME];
  readonly $runBefore = ['rendering-docs'];

  docTypes = ['package'];

  $process(docs: Array<Document>): Array<Document> {
    return docs.map((doc) => {
      if (this.docTypes.includes(doc.docType)) {
        doc.data = {
          breadcrumbs: doc.breadcrumbs,
          kind: doc.kind,
          ...getPackageInfo(doc),
        };
      }
      return doc;
    });
  }
}

export const ADD_PACKAGE_EXPORTS_PROCESSOR_PROVIDER = <const>[
  ADD_PACKAGE_EXPORTS_PROCESSOR_NAME,
  () => new AddPackageExportsProcessor(),
];
