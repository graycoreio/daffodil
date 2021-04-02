import { DaffCategoryFilterRangeBase } from '../../../../models/public_api';

/**
 * Determines whether or not a filter is applied.
 */
export const daffIsFilterRangeApplied = <T>(filter: DaffCategoryFilterRangeBase<T>): boolean =>
  Object.keys(filter.options).map((key) => filter.options[key]).length > 1;
