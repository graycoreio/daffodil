import {
  Processor,
  Document,
} from 'dgeni';
import * as path from 'path';

import { API_SOURCE_PATH } from '../transforms/config';

export interface DocumentWithDepth extends Document {
  depth?: number;
}

export class PackagesProcessor implements Processor {
  name = 'packages';
  $runBefore = ['computing-ids'];
  docTypes = [];
  nameComputer = (id: string): string => `@daffodil/${id}`;

  $process(docs: Document[]): DocumentWithDepth[] {
    return docs.map(doc => {
      if (doc.docType === 'module') {
        doc.id = doc.id
          .replace('src/', '')
          .replace('/src', '')
          .replace(/^.*libs\//, '');
        doc.docType = 'package';
        try {
          const packageJson = require(path.resolve(API_SOURCE_PATH, doc.id, 'package.json'));
          doc.description = packageJson.description;
        } catch {}
        // The name is actually the full id
        doc.name = this.nameComputer(doc.id);
        // root packages should have depth of 0
        doc.depth = doc.id.split('/').length - 1;
      }
      return doc;
    });
  }
};
