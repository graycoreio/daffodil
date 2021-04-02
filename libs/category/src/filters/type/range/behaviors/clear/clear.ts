import { DaffCategoryFilterRangeBase } from '../../../../../models/public_api';

export const daffClearFilterRange = <T>(filter: DaffCategoryFilterRangeBase<T>): DaffCategoryFilterRangeBase<T> => ({
  ...filter,
  options: {},
});
