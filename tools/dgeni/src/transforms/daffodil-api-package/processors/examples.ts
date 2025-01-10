import { Document } from 'dgeni';
import { slugify } from 'markdown-toc';

import {
  DaffDocExample,
  DaffDocTableOfContents,
} from '@daffodil/docs-utils';

import { MARKDOWN_CODE_PROCESSOR_NAME } from '../../../processors/markdown';
import { FilterableProcessor } from '../../../utils/filterable-processor.type';

export const EXAMPLES_PROCESSOR_NAME = 'examples';

const genExamplesToc = (examples: Array<DaffDocExample>): DaffDocTableOfContents =>
  examples.map((example) => ({
    content: example.caption,
    lvl: 3,
    slug: example.id,
  }));

/**
 * Adds subpackage entry point docs to the containing package doc.
 */
export class ExamplesProcessor implements FilterableProcessor {
  readonly name = EXAMPLES_PROCESSOR_NAME;
  readonly $runAfter = ['docs-processed'];
  readonly $runBefore = ['rendering-docs', MARKDOWN_CODE_PROCESSOR_NAME];

  docTypes = [];

  $process(docs: Array<Document>): Array<Document> {
    return docs.map((doc) => {
      if (this.docTypes.includes(doc.docType)) {
        doc.examples = doc.tags.tagsByName.get('example')?.map((example, i): DaffDocExample => ({
          id: slugify(`${doc.name}-example-${i}`),
          caption: example.caption,
          body: example.body,
        })) || [];
        doc.tableOfContents = doc.examples.length > 0 ? [
          {
            content: 'Examples',
            lvl: 2,
            // TODO: add doc-specific prefix
            slug: 'examples',
          },
          ...genExamplesToc(doc.examples),
        ] : [];
      }
      return doc;
    });
  }
}

export const EXAMPLES_PROCESSOR_PROVIDER = <const>[
  EXAMPLES_PROCESSOR_NAME,
  () => new ExamplesProcessor(),
];
