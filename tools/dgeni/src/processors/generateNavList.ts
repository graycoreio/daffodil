import {
  Processor,
  Document,
} from 'dgeni';

export const GENERATE_NAV_LIST_PROCESSOR_NAME = 'generateNavList';

export class GenerateNavListProcessor implements Processor {
  name = GENERATE_NAV_LIST_PROCESSOR_NAME;
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

export const GENERATE_NAV_LIST_PROCESSOR_PROVIDER = <const>[
  GENERATE_NAV_LIST_PROCESSOR_NAME,
  () => new GenerateNavListProcessor(),
];
