import {
  Processor,
  Document,
} from 'dgeni';

import { isPublic } from '../utils/is-public';

/**
 * Filter out properties that are marked as @docs-private
 */
export class FilterOutPrivatePropertiesProcessor implements Processor {
  name = 'filterOutPrivateProperties';
  $runAfter = ['paths-computed'];
  $runBefore = ['paths-absolutified'];

  $process(docs: Document[]): Document[] {
    return docs
      .filter(isPublic)
      .map(doc => {
        if (doc.members) {
          doc.members = doc.members.filter(isPublic);
        }
        return doc;
      });
  }
}
