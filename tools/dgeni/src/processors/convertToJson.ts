import {
  Processor,
  Document,
} from 'dgeni';

export const CONVERT_TO_JSON_PROCESSOR_NAME = 'convertToJson';

export class ConvertToJsonProcessor implements Processor {
  readonly name = CONVERT_TO_JSON_PROCESSOR_NAME;
  readonly $runAfter = ['docs-rendered'];
  readonly $runBefore = ['writeFilesProcessor'];
  docTypes = [];
  /**
   * Extra doc fields to be copied into the written JSON document.
   * Take care that these fields are serializable.
   */
  extraFields = [];

  constructor(public log, public createDocMessage) {}

  $process(docs: Document[]) {
    const docTypes = this.docTypes;
    docs.forEach((doc) => {
      if (docTypes.includes(doc.docType)) {
        const contents = doc.renderedContent || '';

        let title = doc.title;
        const tableOfContents = doc.tableOfContents;

        // We do allow an empty `title` but if it is `undefined` we resort to `vFile.title` and then `name`
        if (title === undefined) {
          title = (doc.vFile && doc.vFile.title);
        }

        if (title === undefined) {
          title = doc.name;
        }

        // If there is still no title then log a warning
        if (title === undefined) {
          title = '';
          this.log.warn(this.createDocMessage('Title property expected', doc));
        }

        doc.renderedContent = JSON.stringify({
          ...this.extraFields.reduce((acc, field) => {
            acc[field] = doc[field];
            return acc;
          }, {}),
          id: doc.path,
          title,
          contents,
          tableOfContents,
        }, null, 2);
      }
    });
  }
};

export const CONVERT_TO_JSON_PROCESSOR_PROVIDER = <const>[
  CONVERT_TO_JSON_PROCESSOR_NAME,
  (log, createDocMessage) => new ConvertToJsonProcessor(log, createDocMessage),
];
