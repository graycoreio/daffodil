import { DaffCategoryFilterRangeBase } from '../../../../../models/public_api';

/**
 * Unapplies the applied filter options of a {@link DaffCategoryFilterRangeBase}
 *
 * @docs-private
 */
export const daffClearFilterRange = <T>(filter: DaffCategoryFilterRangeBase<T>): DaffCategoryFilterRangeBase<T> => ({
  ...filter,
  options: {},
});
