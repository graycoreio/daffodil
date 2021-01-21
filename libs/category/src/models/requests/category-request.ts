import { ID } from '@daffodil/core';

import { DaffCategoryFilterRequest } from './filter-request';

export enum DaffSortDirectionEnum {
	Ascending = 'ASC',
	Decending = 'DSC'
}

export interface DaffCategoryRequest {
  id: ID;
  filter_requests?: DaffCategoryFilterRequest[];
  applied_sort_option?: string;
  applied_sort_direction?: DaffSortDirectionEnum;
  current_page?: number;
  page_size?: number;
}
