import { Document } from 'dgeni';
import hljs from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';

import { MarkdownCodeProcessor } from '../../../processors/markdown';
import { FilterableProcessor } from '../../../utils/filterable-processor.type';

hljs.registerLanguage('typescript', typescript);

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

  $process(docs: Array<Document>): Array<Document> {
    return docs.map((doc) => {
      if (this.docTypes.includes(doc.docType)) {
        doc.importExample = `<code>${hljs.highlight(`import { ${doc.name} } from '${doc.parent.name}'`, { language: 'typescript' }).value}</code>`;
      }
      return doc;
    });
  }
}

export const IMPORT_EXAMPLE_PROCESSOR_PROVIDER = <const>[
  IMPORT_EXAMPLE_PROCESSOR_NAME,
  (markdown: MarkdownCodeProcessor) => new ImportExampleProcessor(markdown),
];
