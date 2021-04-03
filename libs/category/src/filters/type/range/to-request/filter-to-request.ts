import {
  DaffCategoryFilterType,
  DaffCategoryFilterRangeBase,
  DaffCategoryFilterRangePair,
  DaffCategoryFilterRangeRequestBase,
  DaffCategoryFilterRequest,
} from '../../../../models/public_api';

export const daffCategoryFilterRangeToRequest = <T>(
  filter: DaffCategoryFilterRangeBase<T>,
  options: DaffCategoryFilterRangePair<T>[],
): DaffCategoryFilterRangeRequestBase<T> => ({
    type: filter.type,
    name: filter.name,
    value: {
      min: options[0].min.value,
      max: options[0].max.value,
    },
  });
