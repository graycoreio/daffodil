import { DaffFilterRequest } from '../filterable/public_api';
import { DaffSortDirectionEnum } from './sortable';

/**
 * A collection of items that is paginable, sortable, and filterable.
 */
export interface DaffCollectionRequest {
  /**
   * The option by which to sort the collection's items.
   */
  appliedSortOption?: string;

  /**
   * The direction by which to sort the collection's items.
   */
  appliedSortDirection?: DaffSortDirectionEnum;

  /**
   * What page of the collection's items to retrieve.
   */
  currentPage?: number;

  /**
   * The number of items per-page to request.
   */
  pageSize?: number;
  /**
   * The properties by which to filter the items of the collection being requested.
   */
  filterRequests?: DaffFilterRequest[];
}
