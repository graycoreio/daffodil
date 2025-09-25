import { Document } from 'dgeni';
import { highlightCodeInline } from '../../../utils/shiki-highlighter';

import { MarkdownCodeProcessor } from '../../../processors/markdown';
import { FilterableProcessor } from '../../../utils/filterable-processor.type';

export const IMPORT_EXAMPLE_PROCESSOR_NAME = 'importExample';

/**
 * Adds an example of how to import this API token.
 */
export class ImportExampleProcessor implements FilterableProcessor {
  readonly name = IMPORT_EXAMPLE_PROCESSOR_NAME;
  readonly $runAfter = ['docs-processed'];
  readonly $runBefore = ['rendering-docs'];

  docTypes = [];

  constructor(
    private markdown: MarkdownCodeProcessor,
  ) {}

  async $process(docs: Array<Document>): Promise<Array<Document>> {
    const processedDocs = [];

    for (const doc of docs) {
      if (this.docTypes.includes(doc.docType)) {
        try {
          const importCode = `import { ${doc.name} } from '${doc.parent.name}'`;
          const highlightedCode = await highlightCodeInline(importCode, 'typescript');
          doc.importExample = `<code>${highlightedCode}</code>`;
        } catch (error) {
          console.warn(`Failed to highlight import example for ${doc.name}:`, error);
          // Fallback to plain code if highlighting fails
          doc.importExample = `<code>import { ${doc.name} } from '${doc.parent.name}'</code>`;
        }
      }
      processedDocs.push(doc);
    }

    return processedDocs;
  }
}

export const IMPORT_EXAMPLE_PROCESSOR_PROVIDER = <const>[
  IMPORT_EXAMPLE_PROCESSOR_NAME,
  (markdown: MarkdownCodeProcessor) => new ImportExampleProcessor(markdown),
];
