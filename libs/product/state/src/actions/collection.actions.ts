import { Action } from '@ngrx/store';

import {
  DaffProductCollectionRequest,
  DaffProductFilterRequest,
  DaffProductFilterToggleRequest,
} from '@daffodil/product';

/**
 * An action for replacing the filters for the product collection.
 * All existing filters will be removed and the specified filters will be applied.
 */
export interface DaffProductCollectionReplaceFilters extends Action {
  /**
   * Filters to be set on the product collection.
   */
  readonly filters: DaffProductFilterRequest[];
}

/**
 * An action for applying the specified filters for the product collection.
 */
export interface DaffProductCollectionApplyFilters extends Action {
  /**
   * Filters to be applied to the product collection.
   */
  readonly filters: DaffProductFilterRequest[];
}

/**
 * An action for removing the specified filters for the product collection.
 */
export interface DaffProductCollectionRemoveFilters extends Action {
  /**
   * Filters to be removed from the product collection.
   */
  readonly filters: DaffProductFilterRequest[];
}

/**
 * An action for removing all the filters for the product collection.
 */
export type DaffProductCollectionClearFilters = Action;

/**
 * An action for toggling a filters for the product collection.
 */
export interface DaffProductCollectionToggleFilter extends Action {
  /**
   * Filter to be toggled on the product collection.
   */
  readonly filter: DaffProductFilterToggleRequest;
}

/**
 * An action for changing the number of products shown on each page for this product collection.
 */
export interface DaffProductCollectionChangePageSize extends Action {
  /**
   * The number of products per page.
   */
  readonly pageSize: number;
}

/**
 * An action for changing the current page of products for this product collection.
 */
export interface DaffProductCollectionChangeCurrentPage extends Action {
  /**
   * The current page of products for this product collection.
   */
  readonly currentPage: number;
}

/**
 * An action for changing the sorting option for this product collection.
 */
export interface DaffProductCollectionChangeSortingOption extends Action {
  /**
   * The sort option to be applied.
   */
  readonly sort: {
    option: DaffProductCollectionRequest['appliedSortOption'];
    direction: DaffProductCollectionRequest['appliedSortDirection'];
  };
}
