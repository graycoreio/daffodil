import { Action } from '@ngrx/store';

import { DaffCollectionMetadata } from '@daffodil/core';

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
