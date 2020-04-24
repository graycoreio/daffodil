import { Processor, Document } from 'dgeni';

export class DesignExampleConvertToJsonProcessor implements Processor {
  name = 'convertToJson';
  $runBefore = ['writeFilesProcessor'];
  docTypes = [];

  constructor(public log, public createDocMessage) {}

  $process(docs: Document[]) {
    const docTypes = this.docTypes;
    docs.forEach((doc) => {
      if (docTypes.indexOf(doc.docType) !== -1) {
        doc.renderedContent = JSON.stringify({
          id: doc.id, 
          docType: doc.docType,
          name: doc.name,
          files: doc.files,
        }, null, 2);
      }
    });
  }
};