import {
  DaffProductFilterEqual,
  DaffProductFilterEqualRequest,
  DaffProductFilterType,
} from '../../../../models/public_api';
import { daffProductFindAppliedFilterOptions } from '../../../find-applied/public_api';

/**
 * Builds an {@link DaffProductFilterEqualRequest} from the passed filter and options.
 */
export const daffProductFilterEqualToRequest = (
  filter: DaffProductFilterEqual,
): DaffProductFilterEqualRequest | null => {
  const options = daffProductFindAppliedFilterOptions(filter);
  if(!options.length){
    return null;
  }

  return {
    type: DaffProductFilterType.Equal,
    name: filter.name,
    value: options.map(option => option.value),
  };
};
