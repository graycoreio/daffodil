import { Document } from 'dgeni';

import { FilterableProcessor } from '../../../utils/filterable-processor.type';

const getFolder = (doc: Document) => {
  const path = doc.fileInfo.projectRelativePath.split('/');
  return path.slice(0, path.length - 2).join('/');
};

/**
 * Adds subpackage entry point docs to the containing package doc.
 */
export class AddSubpackageExportsProcessor implements FilterableProcessor {
  readonly name = 'addSubpackageExports';
  readonly $runAfter = ['docs-processed'];
  readonly $runBefore = ['rendering-docs'];

  docTypes = ['package'];

  $process(docs: Array<Document>): Array<Document> {
    return docs.map((doc) => {
      if (this.docTypes.includes(doc.docType)) {
        const folder = getFolder(doc);
        const subPackages = docs.filter((d) => {
          const f = getFolder(d);
          return (d.docType === 'module' || d.docType === 'package') && f.includes(folder) && d.depth === doc.depth + 1;
        });
        doc.exports.push(...subPackages);
      }
      return doc;
    });
  }
}
