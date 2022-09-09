import {
  Processor,
  Document,
} from 'dgeni';

export class CrossEnvSafeNameProcessor implements Processor {
  name = 'crossEnvSafeName';
  $runBefore = ['computePathsProcessor'];
  docTypes = [];

  $process(docs: Document[]): Document[] {
    const docTypes = this.docTypes;
    docs.forEach((doc: Document) => {
      doc.safeName = (<string>doc.name).replace(/[A-Z]/g, (a) => a.toLocaleLowerCase().concat('_'));
    });
    return docs;
  }
};
