import {
  Processor,
  Document,
} from 'dgeni';

export class GenerateNavListProcessor implements Processor {
  name = 'generateNavList';
  $runAfter = ['docs-processed'];
  $runBefore = ['rendering-docs'];
  $validate = {
    transform: {
      presence: true,
    },
    outputFolder: {
      presence: true,
    },
  };
  outputFolder: string;
  transform: (docs: Array<Document>) => Document;

  $process(docs: Array<Document>): Array<Document> {
    docs.push({
      docType: 'navigation-list',
      template: 'navigation-list.template.json',
      path: this.outputFolder + '/index.json',
      outputPath: this.outputFolder + '/index.json',
      data: this.transform(docs),
    });

    return docs;
  }
}
