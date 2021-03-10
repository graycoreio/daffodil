import {
  DaffCategoryFilterRequest,
  DaffCategoryFilterType,
  DaffCategoryFromToFilterSeparator,
} from '../models/public_api';

export function daffCategoryValidateFilters(filters: DaffCategoryFilterRequest[]): void {
  if(!filters) {
    return;
  }
  filters.forEach((filter, i) => {
    if(filter.type === DaffCategoryFilterType.Range &&
      filter.value[0].split(DaffCategoryFromToFilterSeparator).length !== 2) {
      throw new Error('Category range filter is in an invalid format. Should be **-**');
    }

    for(let j=i+1; j < filters.length; j++) {
      if(filters[i].name === filters[j].name) {
        throw new Error('More than one category filter of the same name exists. These should' +
          ' be combined into a single filter action with multiple values.');
      }
    }
  });
}
