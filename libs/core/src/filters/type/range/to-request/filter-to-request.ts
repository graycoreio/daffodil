import {
  DaffFilterRangeBase,
  DaffFilterRangeRequestBase,
} from '../../../../filterable/public_api';
import { daffFilterFindAppliedOptions } from '../../../find-applied/public_api';

/**
 * Builds a {@link DaffFilterRangeRequestBase} from the passed {@link DaffFilterRangeBase} and options.
 */
export const daffFilterRangeToRequest = <T, U extends DaffFilterRangeBase<T>>(
  filter: U,
): DaffFilterRangeRequestBase<T> => {
  const options = daffFilterFindAppliedOptions(filter);
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
