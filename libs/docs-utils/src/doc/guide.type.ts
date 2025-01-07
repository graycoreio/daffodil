import { DaffDocTableOfContents } from './toc.type';
import { DaffDoc } from './type';

/**
 * A guide doc. Includes a table of contents.
 */
export interface DaffGuideDoc extends DaffDoc {
  tableOfContents: DaffDocTableOfContents;
}
