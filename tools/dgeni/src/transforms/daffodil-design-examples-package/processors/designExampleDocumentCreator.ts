import {
  Processor,
  Document,
} from 'dgeni';

export const docGroupRegex = /examples\/src\/(.*)\//;

export class DesignExampleDocumentCreatorProcessor implements Processor {
  name = 'examples';
  $runBefore = ['computing-ids'];
  docTypes = [];

  private convertExtensionToLanguage(extension: string) {
    switch(extension){
      case 'ts':
        return 'typescript';
      case 'html':
        return 'html';
      case 'scss':
        return 'css';
      default:
        return '';
    }
  }

  private convertDocToDesignExampleFile(doc: Document) {
    return {
      name: doc.fileInfo.baseName + '.' + doc.fileInfo.extension,
      content: doc.fileInfo.content,
      language: this.convertExtensionToLanguage(doc.fileInfo.extension),
    };
  }

  private getDocGroup(doc: Document) {
    const path: string = doc.fileInfo.relativePath;
    const match = path.match(docGroupRegex);

    if(match){
      return match[1];
    }
  }

  $process(docs: Document[]): Document[] {
    const designExampleDocs = [];
    docs.forEach((doc) => {
      doc.docGroup = this.getDocGroup(doc);
      if(!doc.docGroup){
        console.warn(`Design Land Docs Generation - Group is missing for ${doc.fileInfo.relativePath}`);
        return;
      }
      const designExample = designExampleDocs.find((designDoc) => designDoc.id === doc.docGroup);

      /**
       * We need to add a new type of doc for the examples.
       * This doc is called a `design-example`. It houses the files that make
       * up the example as well as the element name of the example.
       */
      if(!designExample){
        designExampleDocs.push({
          id: doc.docGroup,
          docType: 'design-example',
          name: doc.docGroup,
          element: doc.docGroup,
          files: [this.convertDocToDesignExampleFile(doc)],
        });
      } else {
        // The example already exists, so we just need to append the new file.
        designExample.files.push(this.convertDocToDesignExampleFile(doc));
      }

    });
    return docs.concat(designExampleDocs);
  }
};
