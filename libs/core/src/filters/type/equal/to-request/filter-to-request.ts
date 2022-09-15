import {
  DaffFilterEqual,
  DaffFilterEqualRequest,
  DaffFilterType,
} from '../../../../filterable/public_api';
import { daffFilterFindAppliedOptions } from '../../../find-applied/public_api';

/**
 * Builds an {@link DaffFilterEqualRequest} from the passed filter and options.
 */
export const daffFilterEqualToRequest = (
  filter: DaffFilterEqual,
): DaffFilterEqualRequest | null => {
  const options = daffFilterFindAppliedOptions(filter);
  if(!options.length){
    return null;
  }

  return {
    type: DaffFilterType.Equal,
    name: filter.name,
    value: options.map(option => option.value),
  };
};
