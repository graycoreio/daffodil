import {
  DaffCategoryFilterEqual,
  DaffCategoryFilterEqualRequestReplacement,
  DaffCategoryFilterTypeReplacement,
} from '../../../../models/public_api';
import { daffCategoryFindAppliedFilterOptions } from '../../../find-applied/public_api';

/**
 * Builds an {@link DaffCategoryFilterEqualRequestReplacement} from the passed filter and options.
 */
export const daffCategoryFilterEqualToRequest = (
  filter: DaffCategoryFilterEqual,
): DaffCategoryFilterEqualRequestReplacement | null => {
  const options = daffCategoryFindAppliedFilterOptions(filter);
  if(!options.length){
    return null;
  }

  return {
    type: DaffCategoryFilterTypeReplacement.Equal,
    name: filter.name,
    value: options.map(option => option.value),
  };
};
