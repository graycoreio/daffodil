import { DaffApiDoc } from '@daffodil/docs-utils';

import { DaffGuideDoc } from './guide.type';

/**
 * A guide doc for a package.
 */
export interface DaffPackageGuideDoc extends DaffGuideDoc {
  /**
   * A list of symbol paths exported from the package.
   */
  symbols?: Array<string>;
  /**
   * A list of API docs for symbols exported from this package.
   */
  api?: Array<DaffApiDoc>;
}
