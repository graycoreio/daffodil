import { Document } from 'dgeni';
import { createHighlighter } from 'shiki';

import { MarkdownCodeProcessor } from '../../../processors/markdown';
import { FilterableProcessor } from '../../../utils/filterable-processor.type';

let highlighter: any = null;

async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ['light-plus'],
      langs: []
    });

    // Load only TypeScript
    await highlighter.loadLanguage('typescript');
  }
  return highlighter;
}

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
    const shiki = await getHighlighter();
    return docs.map((doc) => {
      if (this.docTypes.includes(doc.docType)) {
        const highlighted = shiki.codeToHtml(`import { ${doc.name} } from '${doc.parent.name}'`, {
          lang: 'typescript',
          theme: 'light-plus'
        });
        const content = highlighted.replace(/<pre[^>]*><code[^>]*>/, '').replace(/<\/code><\/pre>/, '');
        doc.importExample = `<code>${content}</code>`;
      }
      return doc;
    });
  }
}

export const IMPORT_EXAMPLE_PROCESSOR_PROVIDER = <const>[
  IMPORT_EXAMPLE_PROCESSOR_NAME,
  (markdown: MarkdownCodeProcessor) => new ImportExampleProcessor(markdown),
];
