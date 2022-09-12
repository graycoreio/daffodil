import {
  Processor,
  Document,
} from 'dgeni';

import { crossOsFilename } from '@daffodil/docs-utils';
export class CrossEnvSafeNameProcessor implements Processor {
  name = 'crossEnvSafeName';
  $runBefore = ['computePathsProcessor'];
  docTypes = [];

  $process(docs: Document[]): Document[] {
    const docTypes = this.docTypes;
    docs.forEach((doc: Document) => {
      doc.safeName = crossOsFilename(<string>doc.name);
    });
    return docs;
  }
};
