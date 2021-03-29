import {
  DaffCategoryFilterRequest,
  DaffCategoryFilter,
  DaffToggleCategoryFilterEqualRequest,
} from '../../../models/public_api';
import { daffApplyFilter } from './apply-filter';

/**
 * Applies a filter requests to a set of DaffCategoryFilter.
 **/
export const daffApplyRequestToFilters = (request: DaffCategoryFilterRequest | DaffToggleCategoryFilterEqualRequest, filters: DaffCategoryFilter[]):  DaffCategoryFilter[] => {
  filters = filters.filter(filter => filter.name === request.name).map(filter => daffApplyFilter(request, filter));
  return filters;
};


