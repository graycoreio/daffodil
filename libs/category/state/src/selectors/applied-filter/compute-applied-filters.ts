import { DaffCategoryFilter } from '@daffodil/category';
import { Dict } from '@daffodil/core';

export const computeAppliedFilters = (filters: Dict<DaffCategoryFilter>) => {
  const appliedFilters = {};

  /**
   * Recreate the filter dictionary only with those options that are already applied.
   */
  for(const key in filters){
    if(Object.prototype.hasOwnProperty.call(filters, key)){
      for(const optionKey in filters[key].options) {
        if(Object.prototype.hasOwnProperty.call(filters[key].options, optionKey)) {
          if(filters[key].options[optionKey].applied === true) {
            //Initialize the applied filters.
            if(!appliedFilters[key]){
              appliedFilters[key] = {};
            }

            //Set the applied filter options.
            appliedFilters[key].options[optionKey] = filters[key].options[optionKey];
          }
        }
      }
    }
  }

  /**
   * Fill the applied filters with the rest of the properties of the original object.
   */
  for(const key in appliedFilters) {
    if(Object.prototype.hasOwnProperty.call(appliedFilters, key)){
      appliedFilters[key] = {
        ...filters[key],
        options: appliedFilters[key].options,
      };
    }
  }
  return appliedFilters;
};
