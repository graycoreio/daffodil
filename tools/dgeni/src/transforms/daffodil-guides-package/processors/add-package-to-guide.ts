import { Document } from 'dgeni';

import { DaffPackageGuideDoc } from '@daffodil/docs-utils';

import { defaultIndexer } from '../../../processors/convertToJson';
import { FilterableProcessor } from '../../../utils/filterable-processor.type';
import { indexerFactory } from '../../../utils/indexable';

export const ADD_PACKAGE_TO_GUIDE_PROCESSOR_NAME = 'addPackageToGuide';

const indexer = indexerFactory<DaffPackageGuideDoc>(
  [
    'package',
  ],
  {},
  [
    defaultIndexer,
  ],
);

/**
 * Adds doc kind based on file path.
 */
export class AddPackageToGuideProcessor implements FilterableProcessor {
  readonly name = ADD_PACKAGE_TO_GUIDE_PROCESSOR_NAME;
  readonly $runAfter = ['paths-computed'];
  readonly $runBefore = ['rendering-docs'];

  docTypes = [];

  $process(docs: Array<Document>): Array<Document> {
    return docs.map((doc) => {
      if (this.docTypes.includes(doc.docType)) {
        const [pkg, filename] = doc.fileInfo.relativePath.split('/');
        if (pkg) {
          doc.indexer = indexer;
          doc.package = `@daffodil/${pkg}`;
          if (filename === 'README.md') {
            doc.id = 'overview';
            doc.title = 'Overview';
          }
        }
      }
      return doc;
    });
  }
}

export const ADD_PACKAGE_TO_GUIDE_PROCESSOR_PROVIDER = <const>[
  ADD_PACKAGE_TO_GUIDE_PROCESSOR_NAME,
  () => new AddPackageToGuideProcessor(),
];
