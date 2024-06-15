import {
  Processor,
  Document,
} from 'dgeni';

import { generateNavigationTrieFromDocuments } from '../helpers/navigation-trie';


export interface GenerateGuideListConfiguration {
  outputFolder: string;
};

export const DefaultGenerateGuideListConfiguration: GenerateGuideListConfiguration = {
  outputFolder: 'packages',
};

export const transformGuideDoc = (doc: Document): TransformedDocument => ({
  id: doc.id,
  title: doc.title,
  path: `docs/${doc.path}`,
  tableOfContents: doc.tableOfContents,
});

export class GenerateGuideListProcessor implements Processor {
  name = 'generateGuideList';
  $runAfter = ['docs-processed'];
  $runBefore = ['rendering-docs'];
  config: GenerateGuideListConfiguration;

  constructor(config?: GenerateGuideListConfiguration) {
    this.config = { ...DefaultGenerateGuideListConfiguration, ...config };
  }

  $process(docs: Document[]): Document[] {
    // hardcode design path
    const designDoc = docs.find((d) => d?.id === 'design');
    if (designDoc) {
      designDoc.path = 'design';
    }
    const docsWithoutDesignChildren = docs.filter((d) => !d.id?.startsWith('design/'));

    docs.push({
      docType: 'navigation-list',
      template: 'guide-list.template.json',
      path: this.config.outputFolder + '/guide-list.json',
      outputPath: this.config.outputFolder + '/guide-list.json',
      data: generateNavigationTrieFromDocuments(docsWithoutDesignChildren.map(transformGuideDoc)),
    });

    return docs;
  }
}

export interface TransformedDocument {
  id: string;
  title: string;
  path: string;
  tableOfContents: string;
}

