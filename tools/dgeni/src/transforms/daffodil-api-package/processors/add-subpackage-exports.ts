import { Document } from 'dgeni';

import { FilterableProcessor } from '../../../utils/filterable-processor.type';
import { isSubpackage } from '../../../utils/package-path';

export interface ParentedDocument extends Document {
  parent?: ParentedDocument;
}

export const ADD_SUBPACKAGE_EXPORTS_PROCESSOR_NAME = 'addSubpackageExports';

/**
 * Adds subpackage entry point docs to the containing package doc.
 */
export class AddSubpackageExportsProcessor implements FilterableProcessor {
  readonly name = ADD_SUBPACKAGE_EXPORTS_PROCESSOR_NAME;
  readonly $runAfter = ['docs-processed'];
  readonly $runBefore = ['rendering-docs'];

  docTypes = ['package'];

  $process(docs: Array<Document>): Array<Document> {
    return docs.map((doc) => {
      if (this.docTypes.includes(doc.docType)) {
        const subPackages = docs.filter((d) =>
          d.docType === 'package' && isSubpackage(doc, d),
        );
        doc.exports.push(...subPackages);
        doc.exports.forEach((sub) => sub.parent = doc);
      }
      return doc;
    });
  }
}

export const ADD_SUBPACKAGE_EXPORTS_PROCESSOR_PROVIDER = <const>[
  ADD_SUBPACKAGE_EXPORTS_PROCESSOR_NAME,
  () => new AddSubpackageExportsProcessor(),
];
