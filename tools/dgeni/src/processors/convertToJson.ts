import {
  Processor,
  Document,
} from 'dgeni';

import { DaffDoc } from '@daffodil/docs-utils';

import { Serializer } from '../utils/serialize';

export const CONVERT_TO_JSON_PROCESSOR_NAME = 'convertToJson';

const defaultSerializer: Serializer<DaffDoc> = (doc: DaffDoc & Document): DaffDoc => ({
  id: doc.path,
  kind: doc.kind,
  title: doc.title || doc.vFile?.title || doc.name || '',
  contents: doc.renderedContent || doc.contents || '',
  tableOfContents: doc.tableOfContents,
  breadcrumbs: doc.breadcrumbs || [],
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

  constructor(public log, public createDocMessage) {}

  $process(docs: Document[]) {
    docs.forEach((doc) => {
      const serializedDoc = (doc.serializer || defaultSerializer)(doc);

      if (!serializedDoc.title && !serializedDoc.name) {
        this.log.warn(this.createDocMessage('Title property expected', doc));
      }

      doc.renderedContent = JSON.stringify({
        ...this.extraFields.reduce((acc, field) => {
          acc[field] = doc[field];
          return acc;
        }, {}),
        ...serializedDoc,
      }, null, 2);
    });
  }
};

export const CONVERT_TO_JSON_PROCESSOR_PROVIDER = <const>[
  CONVERT_TO_JSON_PROCESSOR_NAME,
  (log, createDocMessage) => new ConvertToJsonProcessor(log, createDocMessage),
];
