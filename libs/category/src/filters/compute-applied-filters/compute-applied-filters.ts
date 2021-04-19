import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilterReplacement,
  DaffCategoryFilterTypeReplacement,
  DaffCategoryFilterEqualOption,
  DaffCategoryFilterRangePair,
} from '../../models/public_api';
import { daffCategoryFindAppliedFilterOptions } from '../find-applied/public_api';
import { daffCategoryFilterEqualOptionArrayToDict } from '../type/equal/public_api';
import { daffCategoryFilterRangePairArrayToDict } from '../type/range/public_api';

/**
 * Returns a {@link Dict<DaffCategoryFilterReplacement>} and only their applied options.
 * {@link DaffCategoryFilterReplacement} that have no applied options will be omitted.
 */
export const daffCategoryComputeAppliedFilters = (filters: Dict<DaffCategoryFilterReplacement>): Dict<DaffCategoryFilterReplacement> =>
  Object.keys(filters).map(key => filters[key]).reduce((acc, filter) => {
    const appliedOptions = daffCategoryFindAppliedFilterOptions(filter);

    if (appliedOptions.length > 0) {
      acc[filter.name] = {
        ...filter,
        options: filter.type === DaffCategoryFilterTypeReplacement.Equal
          ? daffCategoryFilterEqualOptionArrayToDict(<DaffCategoryFilterEqualOption[]>appliedOptions)
          : daffCategoryFilterRangePairArrayToDict(<DaffCategoryFilterRangePair<unknown>[]>appliedOptions),
      };
    }

    return acc;
  }, {});
