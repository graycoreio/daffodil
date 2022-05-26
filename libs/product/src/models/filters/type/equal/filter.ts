import { Dict } from '@daffodil/core';

import { DaffProductFilterBase } from '../../filter-base';
import { DaffProductFilterType } from '../filter-type';
import { DaffProductFilterEqualOption } from './option';

/**
 * A DaffProductFilterEqual is used to represent filters where
 * there is a set of well-defined dictionary-like values that are exactly
 * matchable. For example, one such filter may be a "Color" filter with options
 * of "Red", "Green", or "Blue" where a user can which filters options from the set
 * to apply.
 *
 * It is important to note that this kind of filter does not imply how combinations of
 * options are applied to collections of items, items that are "Red" AND "Green" vs.
 * items that are "Red" OR "Green".
 */
export interface DaffProductFilterEqual extends DaffProductFilterBase {
  /**
   * The filter type for this model is always of type "DaffProductFilterType.Equal".
   */
  type: DaffProductFilterType.Equal;
  /**
   * A dictionary of filter options.
   */
  options: Dict<DaffProductFilterEqualOption>;
}
