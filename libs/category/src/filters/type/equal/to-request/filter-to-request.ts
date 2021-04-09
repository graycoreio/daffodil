import {
  DaffCategoryEqualFilter,
  DaffCategoryFilterEqualOption,
  DaffCategoryFilterEqualRequest,
  DaffCategoryFilterType,
} from '../../../../models/public_api';

/**
 * Builds an equal filter request from the passed filter and options.
 */
export const daffCategoryFilterEqualToRequest = (
  filter: DaffCategoryEqualFilter,
  options: DaffCategoryFilterEqualOption[],
): DaffCategoryFilterEqualRequest => ({
  type: DaffCategoryFilterType.Equal,
  name: filter.name,
  value: options.map(option => option.value),
});
