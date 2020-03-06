import { DaffCategoryFilterAction } from './filter-action';

export enum DaffSortDirectionEnum {
	Ascending = 'ASC',
	Decending = 'DSC'
}

export interface DaffCategoryRequest {
  id: string;
  applied_filters?: DaffCategoryFilterAction[];
  applied_sort_option?: string;
  applied_sort_direction?: DaffSortDirectionEnum;
  current_page?: number;
  page_size?: number;
}
