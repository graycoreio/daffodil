import { DaffSortDirectionEnum } from './sortable';

/**
 * A collection of items that is paginable and sortable.
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
}
