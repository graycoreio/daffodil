import { Document } from 'dgeni';

import { CollectLinkableSymbolsProcessor } from './collect-linkable-symbols';
import { FilterableProcessor } from '../utils/filterable-processor.type';

export const ADD_API_SYMBOLS_TO_PACKAGES_PROCESSOR_NAME = 'addApiSymbolsToPackages';

export class AddApiSymbolsToPackagesProcessor implements FilterableProcessor {
  readonly name = ADD_API_SYMBOLS_TO_PACKAGES_PROCESSOR_NAME;
  readonly $runAfter = ['paths-absolutified'];
  readonly $runBefore = ['rendering-docs'];

  docTypes = [];
  lookup = (doc: Document) => doc.id;

  $process(docs: Array<Document>): Array<Document> {
    const ret = docs.map(doc => {
      if (this.docTypes.includes(doc.docType)) {
        const exportDocs = CollectLinkableSymbolsProcessor.packages.get(this.lookup(doc));
        if (exportDocs) {
          doc.symbols = exportDocs?.map((d) => d.path);
        }
      }
      return doc;
    });

    return ret;
  }
};

export const ADD_API_SYMBOLS_TO_PACKAGES_PROCESSOR_PROVIDER = <const>[
  ADD_API_SYMBOLS_TO_PACKAGES_PROCESSOR_NAME,
  () => new AddApiSymbolsToPackagesProcessor(),
];
