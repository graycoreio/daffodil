import { Dict } from '@daffodil/core';

import {
  DaffProductFilter,
  DaffProductFilterType,
  DaffProductFilterEqualOption,
  DaffProductFilterRangePair,
} from '../../models/public_api';
import { daffProductFindAppliedFilterOptions } from '../find-applied/public_api';
import { daffProductFilterEqualOptionArrayToDict } from '../type/equal/public_api';
import { daffProductFilterRangePairArrayToDict } from '../type/range/public_api';

/**
 * Returns a {@link Dict<DaffProductFilter>} and only their applied options.
 * {@link DaffProductFilter} that have no applied options will be omitted.
 */
export const daffProductComputeAppliedFilters = (filters: Dict<DaffProductFilter>): Dict<DaffProductFilter> =>
  Object.keys(filters).map(key => filters[key]).reduce((acc, filter) => {
    const appliedOptions = daffProductFindAppliedFilterOptions(filter);

    if (appliedOptions.length > 0) {
      acc[filter.name] = {
        ...filter,
        options: filter.type === DaffProductFilterType.Equal
          ? daffProductFilterEqualOptionArrayToDict(<DaffProductFilterEqualOption[]>appliedOptions)
          : daffProductFilterRangePairArrayToDict(<DaffProductFilterRangePair<unknown>[]>appliedOptions),
      };
    }

    return acc;
  }, {});
