import {
  DaffCategoryFilterEqual,
  DaffCategoryFilterEqualOption,
  DaffCategoryFilterEqualRequest,
  DaffCategoryFilterType,
} from '../../../../models/public_api';
import { daffCategoryFindAppliedFilterOptions } from '../../../find-applied/public_api';

/**
 * Builds an {@link DaffCategoryFilterEqualRequest} from the passed filter and options.
 */
export const daffCategoryFilterEqualToRequest = (
  filter: DaffCategoryFilterEqual,
): DaffCategoryFilterEqualRequest | null => {
  const options = daffCategoryFindAppliedFilterOptions(filter);
  if(!options.length){
    return null;
  }

  return {
    type: DaffCategoryFilterType.Equal,
    name: filter.name,
    value: options.map(option => option.value),
  };
};
