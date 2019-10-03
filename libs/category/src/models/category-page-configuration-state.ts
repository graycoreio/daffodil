import { DaffCategoryPageConfigurationRequest } from './category-page-configuration-request';
import { DaffCategoryFilter } from './category-filter';
import { DaffCategorySortOption } from './category-sort-option';

export interface DaffCategoryPageConfigurationState extends DaffCategoryPageConfigurationRequest {
  filters: DaffCategoryFilter[];
  sort_options: DaffCategorySortOption[];
  total_pages: number;
}