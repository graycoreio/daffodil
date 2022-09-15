import { DaffFilterRangeBase } from '../../../../../filterable/public_api';

/**
 * Unapplies the applied filter options of a {@link DaffFilterRangeBase}
 *
 * @idempotent {filter}
 * @docs-private
 */
export const daffClearFilterRange = <T, U extends DaffFilterRangeBase<T>>(filter: U): U => ({
  ...filter,
  options: {},
});
