import { Document } from 'dgeni';

import { DocumentWithFilePath } from '../../../utils/document-with-file-path.type';
import { FilterableProcessor } from '../../../utils/filterable-processor.type';
import { isSubpackage } from '../../../utils/package-path';

/**
 * Adds subpackage entry point docs to the containing package doc.
 */
export class AddSubpackageExportsProcessor implements FilterableProcessor {
  readonly name = 'addSubpackageExports';
  readonly $runAfter = ['docs-processed'];
  readonly $runBefore = ['rendering-docs'];

  docTypes = ['package'];

  $process(docs: Array<DocumentWithFilePath>): Array<Document> {
    return docs.map((doc) => {
      if (this.docTypes.includes(doc.docType)) {
        const subPackages = docs.filter((d) =>
          d.docType === 'package' && isSubpackage(doc, d),
        );
        doc.exports.push(...subPackages);
      }
      return doc;
    });
  }
}
