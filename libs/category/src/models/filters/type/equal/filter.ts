import { Dict } from '@daffodil/core';

import { DaffCategoryFilterBaseReplacement } from '../../category-filter-base';
import { DaffCategoryFilterTypeReplacement } from '../category-filter-type';
import { DaffCategoryFilterEqualOption } from './option';

/**
 * A DaffCategoryFilterEqual is used to represent filters where
 * there is a set of well-defined dictionary-like values that are exactly
 * matchable. For example, one such filter may be a "Color" filter with options
 * of "Red", "Green", or "Blue" where a user can which filters options from the set
 * to apply.
 *
 * It is important to note that this kind of filter does not imply how combinations of
 * options are applied to collections of items, items that are "Red" AND "Green" vs.
 * items that are "Red" OR "Green".
 */
export interface DaffCategoryFilterEqual extends DaffCategoryFilterBaseReplacement {
	type: DaffCategoryFilterTypeReplacement.Equal;
	options: Dict<DaffCategoryFilterEqualOption>;
}
