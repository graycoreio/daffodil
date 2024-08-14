import {
  Processor,
  Document,
} from 'dgeni';

import { generateNavigationTrieFromDocuments } from '../helpers/navigation-trie';

export const transformGuideDoc = (doc: Document): TransformedDocument => ({
  id: doc.id,
  title: doc.title,
  path: doc.path,
  tableOfContents: doc.tableOfContents,
});

export class GenerateGuideListProcessor implements Processor {
  name = 'generateGuideList';
  $runAfter = ['docs-processed'];
  $runBefore = ['rendering-docs'];
  outputFolder: string;

  $process(docs: Document[]): Document[] {
    // hardcode design path
    const designDoc = docs.find((d) => d?.id === 'design');
    if (designDoc) {
      designDoc.path = 'design';
    }

    docs.push({
      docType: 'navigation-list',
      template: 'guide-list.template.json',
      path: this.outputFolder + '/index.json',
      outputPath: this.outputFolder + '/index.json',
      data: generateNavigationTrieFromDocuments(docs.map(transformGuideDoc)),
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

