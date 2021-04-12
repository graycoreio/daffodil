import { DaffCategoryFilterRangeBase } from '../../../../models/public_api';

/**
 * Determines whether or not a {@link DaffCategoryFilterRangeBase} has any applied options.
 */
export const daffIsFilterRangeApplied = <T>(filter: DaffCategoryFilterRangeBase<T>): boolean =>
  Object.keys(filter.options).length > 0;
