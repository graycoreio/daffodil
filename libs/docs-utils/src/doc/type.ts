import { DaffDocTableOfContents } from '../public_api';
import { DaffBaseDoc } from './base.type';
import { DaffDocsRenderedContent } from './rendered-content.type';

/**
 * Represents some piece of documentation with content that can be rendered.
 */
export interface DaffDoc extends DaffBaseDoc {
  contents: DaffDocsRenderedContent;
  tableOfContents: DaffDocTableOfContents;
}
