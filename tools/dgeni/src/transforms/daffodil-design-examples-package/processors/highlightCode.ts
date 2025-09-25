import {
  Processor,
  Document,
} from 'dgeni';
import { highlightCodeInline } from '../../../utils/shiki-highlighter';

export class DesignExampleHighlightCodeProcessor implements Processor {
  name = 'highlightCode';
  $runAfter = ['examples-files'];
  $runBefore = ['convertToJson'];
  docTypes = [];

  constructor() {}

  async $process(docs: Document[]): Promise<Document[]> {
    for (const doc of docs) {
      for (const file of doc.files) {
        try {
          file.content = await highlightCodeInline(file.content, file.language);
        } catch (error) {
          console.warn(`Failed to highlight code for language '${file.language}':`, error);
          // Keep original content if highlighting fails
        }
      }
    }
    return docs;
  }
};
