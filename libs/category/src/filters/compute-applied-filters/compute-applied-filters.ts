import {
  DaffCategoryFilter,
  daffCategoryFindAppliedFilterOptions,
  DaffCategoryFilterType,
  daffCategoryFilterEqualOptionArrayToDict,
  daffCategoryFilterRangePairArrayToDict,
  DaffCategoryFilterEqualOption,
  DaffCategoryFilterRangePair,
} from '@daffodil/category';
import { Dict } from '@daffodil/core';

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
