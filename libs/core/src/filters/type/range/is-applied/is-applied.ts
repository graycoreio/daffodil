import { DaffFilterRangeBase } from '../../../../filterable/public_api';

/**
 * Determines whether or not a {@link DaffFilterRangeBase} has any applied options.
 */
export const daffIsFilterRangeApplied = <T>(filter: DaffFilterRangeBase<T>): boolean =>
  Object.keys(filter.options).length > 0;
