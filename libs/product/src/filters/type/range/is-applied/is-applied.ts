import { DaffProductFilterRangeBase } from '../../../../models/public_api';

/**
 * Determines whether or not a {@link DaffProductFilterRangeBase} has any applied options.
 */
export const daffIsFilterRangeApplied = <T>(filter: DaffProductFilterRangeBase<T>): boolean =>
  Object.keys(filter.options).length > 0;
