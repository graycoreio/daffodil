import {
  Processor,
  Document,
} from 'dgeni';

import { generateNavigationTrieFromDocuments } from '../helpers/navigation-trie';

export interface GenerateGuideListConfiguration {
  outputFolder: string;
};

export const transformGuideDoc = (doc: Document) => ({
  id: doc.id,
  title: doc.title,
  path: `docs/${doc.path}`,
});

export class GenerateGuideListProcessor implements Processor {
  name = 'generateGuideList';
  $runAfter = ['docs-processed'];
  $runBefore = ['rendering-docs'];

  constructor(private config: GenerateGuideListConfiguration) {}

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
      path: this.config.outputFolder + '/index.json',
      outputPath: this.config.outputFolder + '/index.json',
      data: generateNavigationTrieFromDocuments(docsWithoutDesignChildren.map(transformGuideDoc)),
    });

    return docs;
  }
}


