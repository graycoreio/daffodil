import {
  Processor,
  Document,
} from 'dgeni';

import { daffDocsGetPackageFromId } from '@daffodil/docs-utils';

import { ROLE_PROCESSOR_NAME } from './role';

export const ADD_PACKAGE_PROCESSOR_NAME = 'addPackage';

/**
 * Adds exports info to API packages.
 */
export class AddPackageProcessor implements Processor {
  readonly name = ADD_PACKAGE_PROCESSOR_NAME;
  readonly $runAfter = ['docs-processed'];
  readonly $runBefore = ['rendering-docs', ROLE_PROCESSOR_NAME];

  docTypes: Array<string> = [];

  $process(docs: Array<Document>): Array<Document> {
    return docs.map((doc) => {
      if (this.docTypes.includes(doc.docType)) {
        doc.package = doc.parent?.name || daffDocsGetPackageFromId(doc);
      }
      return doc;
    });
  }
}

export const ADD_PACKAGE_PROCESSOR_PROVIDER = <const>[
  ADD_PACKAGE_PROCESSOR_NAME,
  () => new AddPackageProcessor(),
];
