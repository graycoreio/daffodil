import {
  Processor,
  Document,
} from 'dgeni';

import { DaffDoc } from '@daffodil/docs-utils';

import {
  IndexableDoc,
  Indexer,
} from '../utils/indexable';
import {
  SerializableDoc,
  Serializer,
} from '../utils/serialize';

export const CONVERT_TO_JSON_PROCESSOR_NAME = 'convertToJson';

const defaultSerializer: Serializer<DaffDoc> = (doc: DaffDoc & Document): DaffDoc => ({
  id: doc.path,
  kind: doc.kind,
  title: doc.title || doc.vFile?.title || doc.name || '',
  contents: doc.renderedContent || doc.contents || '',
  tableOfContents: doc.tableOfContents,
  breadcrumbs: doc.breadcrumbs || [],
});

export const defaultIndexer: Indexer<DaffDoc> = (doc: DaffDoc & Document) => ({
  doc: {
    id: doc.path,
    kind: doc.kind,
    title: doc.title || doc.vFile?.title || doc.name || '',
    contents: doc.renderedContent || doc.contents || '',
  },
  extraIndices: [],
});

export class ConvertToJsonProcessor implements Processor {
  readonly name = CONVERT_TO_JSON_PROCESSOR_NAME;
  readonly $runAfter = ['docs-rendered'];
  readonly $runBefore = ['writing-files'];
  /**
   * Extra doc fields to be copied into the written JSON document.
   * Take care that these fields are serializable.
   */
  extraFields = [];

  constructor(public log, public createDocMessage, public computePathsProcessor, public computeIdsProcessor) {}

  $process(docs: Array<SerializableDoc & IndexableDoc & Document>) {
    const dooks = docs.reduce((acc, doc) => {
      const serializedDoc = (doc.serializer || defaultSerializer)(doc);

      if (!serializedDoc.title && !serializedDoc.name) {
        this.log.warn(this.createDocMessage('Title property expected', doc));
      }

      doc.renderedContent = JSON.stringify({
        ...this.extraFields.reduce((extras, field) => {
          extras[field] = doc[field];
          return extras;
        }, {}),
        ...serializedDoc,
      }, null, 2);

      acc.push(doc);

      if (doc.indexer) {
        const { doc: indexedDoc, extraIndices } = doc.indexer(doc);
        const indexedDocs = [
          {
            ...indexedDoc,
            docType: 'searchIndex',
            renderedContent: JSON.stringify(indexedDoc),
          },
          ...extraIndices.map((d) => ({
            ...d,
            docType: 'searchIndex',
            renderedContent: JSON.stringify(d),
          })),
        ];
        this.computeIdsProcessor.$process(indexedDocs);
        this.computePathsProcessor.$process(indexedDocs);

        acc.push(...indexedDocs);
      }

      return acc;
    }, []);

    return dooks;//
  }
};

export const CONVERT_TO_JSON_PROCESSOR_PROVIDER = <const>[
  CONVERT_TO_JSON_PROCESSOR_NAME,
  (log, createDocMessage, computePathsProcessor, computeIdsProcessor) => new ConvertToJsonProcessor(log, createDocMessage, computePathsProcessor, computeIdsProcessor),
];
