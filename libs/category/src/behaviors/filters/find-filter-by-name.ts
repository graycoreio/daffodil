import { DaffCategoryFilterRequest } from '../../models/public_api';

export const findFilterByName =
  (name: string, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest =>
    appliedFilters.filter(filter => filter.name === name).shift();
