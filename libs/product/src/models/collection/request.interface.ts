import { DaffSortDirectionEnum } from '@daffodil/core';

import { DaffProductFilterRequest } from '../filters/public_api';

export interface DaffProductCollectionRequest {
  /**
   * The properties by which to filter the items of the product collection being requested.
   */
  filter_requests?: DaffProductFilterRequest[];

  /**
   * The option by which to sort a product collection's items.
   */
  applied_sort_option?: string;

  /**
   * The direction by which to sort the product collection's items.
   */
  applied_sort_direction?: DaffSortDirectionEnum;

  /**
   * What page of the product collection's items to retrieve.
   */
  current_page?: number;

  /**
   * The number of items per-page to request.
   */
  page_size?: number;
}
