import {
  DaffCategoryFilterEqual,
  DaffCategoryFilterEqualOption,
  DaffCategoryFilterEqualRequest,
  DaffCategoryFilterType,
} from '../../../../models/public_api';

/**
 * Builds an {@link DaffCategoryFilterEqualRequest} from the passed filter and options.
 */
export const daffCategoryFilterEqualToRequest = (
  filter: DaffCategoryFilterEqual,
  options: DaffCategoryFilterEqualOption[],
): DaffCategoryFilterEqualRequest => ({
  type: DaffCategoryFilterType.Equal,
  name: filter.name,
  value: options.map(option => option.value),
});
