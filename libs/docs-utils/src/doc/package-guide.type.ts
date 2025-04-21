import { DaffDoc } from './type';
import { DaffDocsApiRole } from '../api/public_api';
import { DaffDocTableOfContents } from '../toc/public_api';
import { DaffApiDoc } from './api/public_api';

/**
 * A guide doc for a package.
 */
export interface DaffPackageGuideDoc extends DaffDoc {
  /**
   * A list of symbol paths exported from the package.
   */
  symbols: Array<string>;
  /**
   * A list of API docs.
   */
  api: {
    [key in DaffDocsApiRole]?: Array<DaffApiDoc>;
  };
  /**
   * A table of contents for the API section.
   */
  apiToc: DaffDocTableOfContents;
  /**
   * A description of the package. This is renderable HTML.
   */
  longDescription: string;
}
