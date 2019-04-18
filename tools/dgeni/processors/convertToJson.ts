import { Processor, Document } from 'dgeni';

export class ConvertToJsonProcessor implements Processor {
  name = 'convertToJson';
  $runBefore = ['writeFilesProcessor'];
  docTypes = [];

  constructor(public log, public createDocMessage) {}

  $process(docs: Document[]) {
    const docTypes = this.docTypes;
    docs.forEach((doc) => {
      if (docTypes.indexOf(doc.docType) !== -1) {
        let contents = doc.renderedContent || '';

        let title = doc.title;

        // We do allow an empty `title` but if it is `undefined` we resort to `vFile.title` and then `name`
        if (title === undefined) {
          title = (doc.vFile && doc.vFile.title);
        }

        if (title === undefined) {
          title = doc.name;
        }

        // If there is still no title then log a warning
        if (title === undefined) {
          title = '';
          this.log.warn(this.createDocMessage('Title property expected', doc));
        }

        doc.renderedContent = JSON.stringify({ id: doc.path, title, contents }, null, 2);
      }
    });
  }
};