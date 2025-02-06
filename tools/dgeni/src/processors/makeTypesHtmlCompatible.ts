import {
  Processor,
  Document,
} from 'dgeni';

import { htmlEncodeBrackets } from '../utils/html-brackets';

/**
 * Exchange < for &lt; and > for &gt; so that generic types can be rendered correctly as html.
 */
export class MakeTypesHtmlCompatibleProcessor implements Processor {
  name = 'makeTypesHtmlCompatible';
  $runAfter = ['docs-processed'];
  $runBefore = ['rendering-docs'];

  $process(docs: Document[]): Document[] {
    docs.map(doc => {
      if(!doc.members) {
        return doc;
      }

      doc.members.map(member => {
        member.type = htmlEncodeBrackets(member.type);
      });
    });

    return docs;
  }
}
