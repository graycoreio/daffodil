import { Processor, Document } from 'dgeni';

export class PackagesProcessor implements Processor {
  name = 'packages';
  $runBefore = ['computing-ids'];
  docTypes = [];

  $process(docs: Document[]): Document[] {
    return docs.map(doc => {
      if (doc.docType === 'module') {
        doc.id = doc.id.replace(/\/src$/, '');
        doc.docType = 'package';
        // The name is actually the full id
        doc.name = `@daffodil/${doc.id}`;
      }
      return doc;
    });
  }
};