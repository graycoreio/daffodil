import { DaffCategoryEqualFilter } from 'libs/category/src/models/public_api';

import {
  DaffCategoryFilterEqualRequest,
  DaffToggleCategoryFilterEqualRequest,
} from '../../../../../models/public_api';

/**
 * Applies a filter request to a group of equal type filter options .
 */
export const applyFilterEqual = (request: DaffCategoryFilterEqualRequest | DaffToggleCategoryFilterEqualRequest, filter: DaffCategoryEqualFilter): DaffCategoryEqualFilter => {
  let options = filter.options;
  /**
   * Since equal requests can accept multiple values, we need to check each of these values
   * against all options.
   */
  const equalOptions = options.filter((option => request.value.indexOf(option.value) > -1));
  if(equalOptions.length === 0) {
    return filter;
  }

  equalOptions.forEach((eqOption) => {
    const idx = options.indexOf(eqOption);
    if(idx === -1){
      return eqOption;
    }

    options = options.map((option, index) => {
      if (index !== idx) {
        return option;
      }

      if(option.applied){
        return option;
      }

      console.log({
        ...option,
        applied: true,
      });

      return {
        ...option,
        applied: true,
      };
    });
  });

  return {
    ...filter,
    options,
  };
};
