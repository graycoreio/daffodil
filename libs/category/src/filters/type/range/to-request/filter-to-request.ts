import {
  DaffCategoryFilterRangeBase,
  DaffCategoryFilterRangePair,
  DaffCategoryFilterRangeRequestBase,
} from '../../../../models/public_api';

/**
 * Builds an range filter request from the passed filter and options.
 */
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
