import {
  Processor,
  Document,
} from 'dgeni';

import { getDirectiveDecorator } from '../utils/get-directive-decorator';

/**
 * Convert selectors with ticks, commas, newlines, spaces, and quotes to a clean array of selector options.
 */
export class CleanSelectorsProcessor implements Processor {
  name = 'cleanSelectors';
  $runAfter = ['filterContainedDocs'];
  $runBefore = ['docs-processed'];

  $process(docs: Document[]): Document[] {
    const removeTicks = new RegExp('[^`]*[^`]');
    const removeQuotes = new RegExp('[^\']*[^\']');

    docs
      .forEach(doc => {
        doc.selectors = this.getSelector(doc)
          ?.match(removeTicks)[0]
          .match(removeQuotes)[0]
          .split(',')
          .map(selector => selector.trim());
      });

    return docs;
  }

  private getSelector(doc) {
    return (<Record<string, string>>getDirectiveDecorator(doc)?.argumentInfo[0])?.selector;
  }
}
