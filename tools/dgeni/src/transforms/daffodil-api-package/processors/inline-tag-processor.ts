import {
  Document,
  Processor,
} from 'dgeni';

export const INLINE_TAG_PROCESSOR_NAME = 'inlineTagProcessorForRealz';

/**
 * Processes inline tags on actually useful fields,
 * before rendering so quotes can be escaped.
 */
export class InlineTagProcessor implements Processor {
  readonly name = INLINE_TAG_PROCESSOR_NAME;
  readonly $runAfter = ['docs-processed'];
  readonly $runBefore = ['rendering-docs'];

  constructor(
    private inlineTagProcessor,
  ) {}

  $process(docs: Array<Document>): Array<Document> {
    docs.forEach((doc) => {
      doc.renderedContent = doc.description ?? doc.content ?? '';
    });

    this.inlineTagProcessor.$process(docs);

    docs.forEach((doc) => {
      doc.description = doc.renderedContent;
    });

    return docs;
  }
}

export const INLINE_TAG_PROCESSOR_PROVIDER = <const>[
  INLINE_TAG_PROCESSOR_NAME,
  (inlineTagProcessor) => new InlineTagProcessor(inlineTagProcessor),
];
