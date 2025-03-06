import { Document } from 'dgeni';
import { MarkdownCodeProcessor } from 'tools/dgeni/src/processors/markdown';

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

  $process(docs: Array<Document>): Array<Document> {
    return docs.map((doc) => {
      if (this.docTypes.includes(doc.docType)) {
        doc.importExample = this.markdown.parse(`\`\`\`ts\nimport { ${doc.name} } from '${doc.parent.name}'\n\`\`\``);
      }
      return doc;
    });
  }
}

export const IMPORT_EXAMPLE_PROCESSOR_PROVIDER = <const>[
  IMPORT_EXAMPLE_PROCESSOR_NAME,
  (markdown: MarkdownCodeProcessor) => new ImportExampleProcessor(markdown),
];
