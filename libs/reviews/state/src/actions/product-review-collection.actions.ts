
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
 * Action types for Product Review Actions.
 */
export enum DaffProductReviewsCollectionActionTypes {
  ChangePageSizeAction = '[@daffodil/reviews/state] Change Product Reviews Collection Page Size Action',
  ChangeCurrentPageAction = '[@daffodil/reviews/state] Change Product Reviews Collection Current Page Action',
  ChangeSortingAction = '[@daffodil/reviews/state] Change Product Reviews Collection Sorting Action',
  ChangeFilterAction = '[@daffodil/reviews/state] Change Product Reviews Collection Filter Action',
}

/**
 * An action for changing the number of items shown on each page for this collection.
 */
export class DaffReviewsCollectionChangePageSize implements DaffCollectionChangePageSize {
  readonly type = DaffProductReviewsCollectionActionTypes.ChangePageSizeAction;

  constructor(
    public pageSize: DaffCollectionMetadata['pageSize'],
  ) {}
}

/**
 * An action for changing the current page of items for this collection.
 */
export class DaffReviewsCollectionChangeCurrentPage implements DaffCollectionChangeCurrentPage {
  readonly type = DaffProductReviewsCollectionActionTypes.ChangeCurrentPageAction;

  constructor(
    public currentPage: DaffCollectionMetadata['currentPage'],
  ) {}
}

/**
 * An action for changing the sorting option for this collection.
 */
export class DaffReviewsCollectionChangeSortingOption implements DaffCollectionChangeSortingOption {
  readonly type = DaffProductReviewsCollectionActionTypes.ChangeSortingAction;

  constructor(
    public sort: {
      option: DaffCollectionMetadata['appliedSortOption'];
      direction: DaffCollectionMetadata['appliedSortDirection'];
    },
  ) {}
}

/**
 * An action for filtering the collection by an overall rating value.
 */
export class DaffReviewsCollectionChangeFilter implements DaffCollectionReplaceFilters {
  readonly type = DaffProductReviewsCollectionActionTypes.ChangeFilterAction;

  constructor(
    public filters: DaffFilterRequest[],
  ) {}
}

export type DaffProductReviewsCollectionActions =
  | DaffReviewsCollectionChangePageSize
  | DaffReviewsCollectionChangeCurrentPage
  | DaffReviewsCollectionChangeSortingOption
  | DaffReviewsCollectionChangeFilter;
