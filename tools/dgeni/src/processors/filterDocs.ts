import { Processor, Document } from "dgeni";

/**
 * Remove docs that are contained in (owned by) another doc
 * so that they don't get rendered as files in themselves.
 */
export class FilterContainedDocsProcessor implements Processor {
  name = 'filterContainedDocs';
  docTypes = ['member', 'function-overload', 'get-accessor-info', 'set-accessor-info', 'parameter'];
  $runBefore = ['docs-processed'];

  $process(docs: Document[]): Document[] {
    docs = docs.filter((doc) => {
        return this.docTypes.indexOf(doc.docType) === -1;
    });

    docs = docs.filter((doc) => {
        return !doc.name.match('Module');
    });

    return docs;
  }
}
