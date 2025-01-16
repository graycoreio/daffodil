import { DaffDoc } from './type';
import { DaffDocTableOfContents } from '../toc/public_api';

/**
 * A guide doc for a package.
 */
export interface DaffPackageGuideDoc extends DaffDoc {
  /**
   * A list of symbol paths exported from the package.
   */
  symbols: Array<string>;
  /**
   * A list of rendered API docs.
   */
  api: Array<string>;
  /**
   * A table of contents for the API section.
   */
  apiToc: DaffDocTableOfContents;
  /**
   * A description of the package. This is renderable HTML.
   */
  longDescription: string;
}
