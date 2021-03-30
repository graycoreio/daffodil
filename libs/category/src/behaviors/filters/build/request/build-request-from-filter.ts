import {
  DaffCategoryFilter,
  DaffCategoryFilterRequest,
  DaffCategoryFilterRangePair,
  DaffCategoryFilterEqualOption,
  DaffCategoryFilterType,
  DaffCategoryRangeFilter,
  DaffCategoryFilterRangeRequest,
  DaffCategoryEqualFilter,
  DaffCategoryFilterEqualRequest,
} from '../../../../models/public_api';
import { daffCategoryFindAppliedFilterOptions } from '../../find-applied/find-applied-options';

const buildRangeRequest = (
  filter: DaffCategoryRangeFilter,
  option: DaffCategoryFilterRangePair,
): DaffCategoryFilterRangeRequest => ({
  type: DaffCategoryFilterType.Range,
  name: filter.name,
  value: {
    min: option.min,
    max: option.max,
  },
});

const buildEqualRequest = (
  filter: DaffCategoryEqualFilter,
  options: DaffCategoryFilterEqualOption[],
): DaffCategoryFilterEqualRequest => ({
  type: DaffCategoryFilterType.Equal,
  name: filter.name,
  value: options.map(option => option.value),
});

/**
 * Builds a category filter request from a category filter.
 * Returns null if the category filter does not have at least one applied option.
 *
 * @param filter The filter from which the request should be built.
 */
export function daffCategoryBuildRequestFromFilter(filter: DaffCategoryFilter): DaffCategoryFilterRequest {
  const appliedOptions = daffCategoryFindAppliedFilterOptions(filter);

  if (appliedOptions.length > 0) {
    switch (filter.type) {
      case DaffCategoryFilterType.Range:
        return buildRangeRequest(filter, <DaffCategoryFilterRangePair>appliedOptions[0]);
      case DaffCategoryFilterType.Equal:
      default:
        return buildEqualRequest(filter, <DaffCategoryFilterEqualOption[]>appliedOptions);
    }
  } else {
    return null;
  }
};
