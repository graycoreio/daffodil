
import { DaffCart } from '@daffodil/cart';
import {
  DaffCollectionMetadata,
  DaffFilterRequest,
} from '@daffodil/core';
import {
  DaffCollectionChangePageSize,
  DaffCollectionChangeCurrentPage,
  DaffCollectionChangeSortingOption,
  DaffCollectionReplaceFilters,
} from '@daffodil/core/state';

/**
 * Action types for Order Actions.
 */
export enum DaffOrderCollectionActionTypes {
  ChangePageSizeAction = '[@daffodil/order] Change Order Collection Page Size Action',
  ChangeCurrentPageAction = '[@daffodil/order] Change Order Collection Current Page Action',
  ChangeSortingAction = '[@daffodil/order] Change Order Collection Sorting Action',
  ChangeFilterAction = '[@daffodil/order] Change Order Collection Filter Action',
}

/**
 * An action for changing the number of items shown on each page for this collection.
 */
export class DaffOrderCollectionChangePageSize implements DaffCollectionChangePageSize {
  readonly type = DaffOrderCollectionActionTypes.ChangePageSizeAction;

  constructor(
    public pageSize: DaffCollectionMetadata['pageSize'],
    public cartId?: DaffCart['id'],
  ) {}
}

/**
 * An action for changing the current page of items for this collection.
 */
export class DaffOrderCollectionChangeCurrentPage implements DaffCollectionChangeCurrentPage {
  readonly type = DaffOrderCollectionActionTypes.ChangeCurrentPageAction;

  constructor(
    public currentPage: DaffCollectionMetadata['currentPage'],
    public cartId?: DaffCart['id'],
  ) {}
}

/**
 * An action for changing the sorting option for this collection.
 */
export class DaffOrderCollectionChangeSortingOption implements DaffCollectionChangeSortingOption {
  readonly type = DaffOrderCollectionActionTypes.ChangeSortingAction;

  constructor(
    public sort: {
      option: DaffCollectionMetadata['appliedSortOption'];
      direction: DaffCollectionMetadata['appliedSortDirection'];
    },
    public cartId?: DaffCart['id'],
  ) {}
}

/**
 * An action for filtering the collection by an overall rating value.
 */
export class DaffOrderCollectionChangeFilter implements DaffCollectionReplaceFilters {
  readonly type = DaffOrderCollectionActionTypes.ChangeFilterAction;

  constructor(
    public filters: DaffFilterRequest[],
    public cartId?: DaffCart['id'],
  ) {}
}

export type DaffOrderCollectionActions =
  | DaffOrderCollectionChangePageSize
  | DaffOrderCollectionChangeCurrentPage
  | DaffOrderCollectionChangeSortingOption
  | DaffOrderCollectionChangeFilter;
