import { ID } from '@daffodil/core';
import { DaffSortDirectionEnum } from '@daffodil/core/state';

import { DaffCategoryFilterRequest } from './filters/public_api';

export interface DaffCategoryRequest {
  id: ID;
  filter_requests?: DaffCategoryFilterRequest[];
  applied_sort_option?: string;
  applied_sort_direction?: DaffSortDirectionEnum;
  current_page?: number;
  page_size?: number;
}
