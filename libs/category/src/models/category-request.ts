import { DaffCategoryFilter } from './category-filter';

export interface DaffCategoryRequest {
  id: string;
  applied_filters?: DaffCategoryFilter[];
  applied_sort_option?: string;
  applied_sort_direction?: string;
  current_page?: number;
  page_size?: number;
}
