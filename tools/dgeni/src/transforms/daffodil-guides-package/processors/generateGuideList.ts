import { Processor, Document } from 'dgeni';
import { generateNavigationTrieFromDocuments } from '../helpers/navigation-trie';


export type GenerateGuideListConfiguration = {
  outputFolder: string;
}

export const DefaultGenerateGuideListConfiguration : GenerateGuideListConfiguration = {
  outputFolder: "guides"
} 
export class GenerateGuideListProcessor implements Processor {
  name = 'generateGuideList';
  $runAfter = ['docs-processed'];
  $runBefore = ['rendering-docs'];
  config: GenerateGuideListConfiguration;
  
  constructor(config?: GenerateGuideListConfiguration) {
    this.config = {...DefaultGenerateGuideListConfiguration, ...config};
  }

  $process(docs: Document[]) : Document[] {
    docs.push({
      docType: 'navigation-list',
      template: 'guide-list.template.json',
      path: this.config.outputFolder + '/guide-list.json',
      outputPath: this.config.outputFolder + '/guide-list.json',
      data: generateNavigationTrieFromDocuments(docs.map(transformGuideDoc)).children,
    });

    return docs;
  }
}

export interface TransformedDocument {
  id: string;
  title: string;
  path: string;
}

export const transformGuideDoc = (doc: Document): TransformedDocument => {
  return {
    id: doc.id,
    title: doc.title,
    path: doc.path,
  }
}