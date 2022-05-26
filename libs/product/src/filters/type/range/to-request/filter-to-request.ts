import {
  DaffProductFilterRangeBase,
  DaffProductFilterRangeRequestBase,
} from '../../../../models/public_api';
import { daffProductFindAppliedFilterOptions } from '../../../find-applied/public_api';

/**
 * Builds a {@link DaffProductFilterRangeRequestBase} from the passed {@link DaffProductFilterRangeBase} and options.
 */
export const daffProductFilterRangeToRequest = <T, U extends DaffProductFilterRangeBase<T>>(
  filter: U,
): DaffProductFilterRangeRequestBase<T> => {
  const options = daffProductFindAppliedFilterOptions(filter);
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
