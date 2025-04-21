import {
  Processor,
  Document,
} from 'dgeni';

import { DaffDocsApiType } from '@daffodil/docs-utils';

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

  docTypes: Array<string> = [DaffDocsApiType.PACKAGE];

  $process(docs: Array<Document>): Array<Document> {
    return docs.map((doc) => {
      if (this.docTypes.includes(doc.docType)) {
        const packageData = getPackageInfo(doc);
        for (const k in packageData) {
          if (Object.hasOwn(packageData, k)) {
            doc[k] = packageData[k];
          }
        }
      }
      return doc;
    });
  }
}

export const ADD_PACKAGE_EXPORTS_PROCESSOR_PROVIDER = <const>[
  ADD_PACKAGE_EXPORTS_PROCESSOR_NAME,
  () => new AddPackageExportsProcessor(),
];
