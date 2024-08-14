import {
  Processor,
  Document,
} from 'dgeni';

/**
 * Removes docs with duplicate IDs.
 */
export class RemoveDuplicatesProcessor implements Processor {
  name = 'removeDuplicates';
  $runAfter = ['readTypeScriptModules'];
  $runBefore = ['generateApiList', 'parsing-tags'];

  $process(docs: Array<Document>): Array<Document> {
    const set = new Set();
    return docs.filter((doc) => {
      if (set.has(doc.id)) {
        return false;
      }
      set.add(doc.id);
      return true;
    });
  }
}
