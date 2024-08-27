import {
  Processor,
  Document,
} from 'dgeni';

import { ConvertToJsonProcessor } from '../../../processors/convertToJson';

export class DesignExampleConvertToJsonProcessor extends ConvertToJsonProcessor implements Processor {
  $process(docs: Document[]) {
    const docTypes = this.docTypes;
    docs.forEach((doc) => {
      if (docTypes.includes(doc.docType)) {
        doc.renderedContent = JSON.stringify({
          id: doc.id,
          docType: doc.docType,
          name: doc.name,
          files: doc.files,
        }, null, 2);
      }
    });
  }
};
