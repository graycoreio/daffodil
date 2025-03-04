import {
  Processor,
  Document,
} from 'dgeni';

import { ADD_SOURCE_NAME } from '../transforms/daffodil-api-package/processors/add-source';

/**
 * Filter out properties that are marked as @docs-private
 */
export class FilterOutPrivatePropertiesProcessor implements Processor {
  name = 'filterOutPrivateProperties';
  $runAfter = ['docs-processed'];
  $runBefore = ['rendering-docs', ADD_SOURCE_NAME];

  $process(docs: Document[]): Document[] {
    return docs.map(doc => {
      if (doc.members) {
        doc.members = filterOutPrivateProperties(doc.members);
      }
      return doc;
    });
  }
}

function filterOutPrivateProperties(members): any {
  return members.filter(member => !member.tags.tags.find(tag => tag.tagName ==='docs-private'));
}
