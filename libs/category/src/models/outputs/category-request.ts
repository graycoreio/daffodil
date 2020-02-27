import { DaffCategoryFilterAction } from './filter-action';

export interface DaffCategoryRequest {
  id: string;
  applied_filters?: DaffCategoryFilterAction[];
  applied_sort_option?: string;
  applied_sort_direction?: string;
  current_page?: number;
  page_size?: number;
}
