import { Dict } from '@daffodil/core';

import {
  DaffCategoryFilter,
  DaffCategoryFilterType,
  DaffCategoryFilterEqualOption,
  DaffCategoryFilterRangePair,
} from '../../models/public_api';
import { daffCategoryFindAppliedFilterOptions } from '../find-applied/public_api';
import { daffCategoryFilterEqualOptionArrayToDict } from '../type/equal/public_api';
import { daffCategoryFilterRangePairArrayToDict } from '../type/range/public_api';

/**
 * Returns a dict of filters and only their applied options.
 * Filters with no applied options will be omitted.
 */
export const daffCategoryComputeAppliedFilters = (filters: Dict<DaffCategoryFilter>): Dict<DaffCategoryFilter> =>
  Object.keys(filters).map(key => filters[key]).reduce((acc, filter) => {
    const appliedOptions = daffCategoryFindAppliedFilterOptions(filter);

    if (appliedOptions.length > 0) {
      acc[filter.name] = {
        ...filter,
        options: filter.type === DaffCategoryFilterType.Equal
          ? daffCategoryFilterEqualOptionArrayToDict(<DaffCategoryFilterEqualOption[]>appliedOptions)
          : daffCategoryFilterRangePairArrayToDict(<DaffCategoryFilterRangePair<unknown>[]>appliedOptions),
      };
    }

    return acc;
  }, {});
