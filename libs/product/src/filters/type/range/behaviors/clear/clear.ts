import { DaffProductFilterRangeBase } from '../../../../../models/public_api';

/**
 * Unapplies the applied filter options of a {@link DaffProductFilterRangeBase}
 *
 * @idempotent {filter}
 * @docs-private
 */
export const daffClearFilterRange = <T, U extends DaffProductFilterRangeBase<T>>(filter: U): U => ({
  ...filter,
  options: {},
});
