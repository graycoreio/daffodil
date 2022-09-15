

import {
  DaffFilterType,
  DaffFilterEqualOption,
  DaffFilterRangePair,
  DaffFilters,
} from '../../filterable/public_api';
import { daffFilterFindAppliedOptions } from '../find-applied/public_api';
import { daffFilterEqualOptionArrayToDict } from '../type/equal/public_api';
import { daffFilterRangePairArrayToDict } from '../type/range/public_api';

/**
 * Returns a {@link DaffFilters} and only their applied options.
 * {@link DaffFilter} that have no applied options will be omitted.
 */
export const daffComputeAppliedFilters = (filters: DaffFilters): DaffFilters =>
  Object.keys(filters).map(key => filters[key]).reduce((acc, filter) => {
    const appliedOptions = daffFilterFindAppliedOptions(filter);

    if (appliedOptions.length > 0) {
      acc[filter.name] = {
        ...filter,
        options: filter.type === DaffFilterType.Equal
          ? daffFilterEqualOptionArrayToDict(<DaffFilterEqualOption[]>appliedOptions)
          : daffFilterRangePairArrayToDict(<DaffFilterRangePair<unknown>[]>appliedOptions),
      };
    }

    return acc;
  }, {});
