import {
  DaffCategoryFilterRangeBase,
  DaffCategoryFilterRangeRequestBase,
} from '../../../../models/public_api';
import { daffCategoryFindAppliedFilterOptions } from '../../../find-applied/public_api';

/**
 * Builds a {@link DaffCategoryFilterRangeRequestBase} from the passed {@link DaffCategoryFilterRangeBase} and options.
 */
export const daffCategoryFilterRangeToRequest = <T, U extends DaffCategoryFilterRangeBase<T>>(
  filter: U,
): DaffCategoryFilterRangeRequestBase<T> => {
  const options = daffCategoryFindAppliedFilterOptions(filter);
  if(!options.length){
    return null;
  }

  return {
    type: filter.type,
    name: filter.name,
    value: {
      min: options[0].min.value,
      max: options[0].max.value,
    },
  };
};
