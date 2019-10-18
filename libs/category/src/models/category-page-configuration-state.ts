import { DaffCategoryFilter } from './category-filter';
import { DaffCategorySortOption } from './category-sort-option';
import { DaffCategoryRequest } from './category-request';

export interface DaffCategoryPageConfigurationState extends DaffCategoryRequest {
  filters: DaffCategoryFilter[];
  sort_options: DaffCategorySortOption[];
  total_pages: number;
}
