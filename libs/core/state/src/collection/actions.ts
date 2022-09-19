import { Action } from '@ngrx/store';

import {
  DaffCollectionMetadata,
  DaffFilterRequest,
  DaffFilterToggleRequest,
} from '@daffodil/core';

/**
 * An action for changing the number of items shown on each page for this collection.
 */
export interface DaffCollectionChangePageSize extends Action {
  /**
   * The number of items per page.
   */
  readonly pageSize: DaffCollectionMetadata['pageSize'];
}

/**
 * An action for changing the current page of items for this collection.
 */
export interface DaffCollectionChangeCurrentPage extends Action {
  /**
   * The current page of items for this collection.
   */
  readonly currentPage: DaffCollectionMetadata['currentPage'];
}

/**
 * An action for changing the sorting option for this collection.
 */
export interface DaffCollectionChangeSortingOption extends Action {
  /**
   * The sort option to be applied.
   */
  readonly sort: {
    option: DaffCollectionMetadata['appliedSortOption'];
    direction: DaffCollectionMetadata['appliedSortDirection'];
  };
}


/**
 * An action for replacing the filters for the collection.
 * All existing filters will be removed and the specified filters will be applied.
 */
export interface DaffCollectionReplaceFilters extends Action {
  /**
   * Filters to be set on the collection.
   */
  readonly filters: DaffFilterRequest[];
}

/**
 * An action for applying the specified filters for the collection.
 */
export interface DaffCollectionApplyFilters extends Action {
  /**
   * Filters to be applied to the collection.
   */
  readonly filters: DaffFilterRequest[];
}

/**
 * An action for removing the specified filters for the collection.
 */
export interface DaffCollectionRemoveFilters extends Action {
  /**
   * Filters to be removed from the collection.
   */
  readonly filters: DaffFilterRequest[];
}

/**
 * An action for removing all the filters for the collection.
 */
export type DaffCollectionClearFilters = Action;

/**
 * An action for toggling a filters for the collection.
 */
export interface DaffCollectionToggleFilter extends Action {
  /**
   * Filter to be toggled on the collection.
   */
  readonly filter: DaffFilterToggleRequest;
}
