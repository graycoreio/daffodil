import {
  Processor,
  Document,
} from 'dgeni';

export class PackagesProcessor implements Processor {
  name = 'packages';
  $runBefore = ['computing-ids'];
  docTypes = [];
  nameComputer = (id: string): string => `@daffodil/${id}`;

  $process(docs: Document[]): Document[] {
    return docs.map(doc => {
      if (doc.docType === 'module') {
        doc.id = doc.id
          .replace('src/', '')
          .replace('/src', '')
          .replace(/^.*libs\//, '');
        doc.docType = 'package';
        // The name is actually the full id
        doc.name = this.nameComputer(doc.id);
      }
      return doc;
    });
  }
};
