import { Processor, Document } from 'dgeni';

export class DesignExampleFilterProcessor implements Processor {
  name = 'examples-files';
  $runBefore = ['computing-ids'];
  $runAfter = ['examples']
  docTypes = ['design-example'];

  $process(docs: Document[]): Document[] {
    return docs.filter((doc) => this.docTypes.indexOf(doc.docType) >= 0);
  }
};