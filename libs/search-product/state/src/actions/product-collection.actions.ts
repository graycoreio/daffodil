import {
  DaffCollectionRequest,
  DaffFilterRequest,
  DaffFilterToggleRequest,
} from '@daffodil/core';
import {
  DaffCollectionChangePageSize,
  DaffCollectionChangeCurrentPage,
  DaffCollectionChangeSortingOption,
  DaffCollectionReplaceFilters,
  DaffCollectionApplyFilters,
  DaffCollectionRemoveFilters,
  DaffCollectionToggleFilter,
  DaffCollectionClearFilters,
} from '@daffodil/core/state';

/**
 * The search action types enum.
 */
export enum DaffSearchProductCollectionActionTypes {
  SearchProductReplaceFiltersAction = '[@daffodil/search-product] Search Product Replace Filters Action',
  SearchProductApplyFiltersAction = '[@daffodil/search-product] Search Product Apply Filters Action',
  SearchProductRemoveFiltersAction = '[@daffodil/search-product] Search Product Remove Filters Action',
  SearchProductClearFiltersAction = '[@daffodil/search-product] Search Product Clear Filters Action',
  SearchProductToggleFiltersAction = '[@daffodil/search-product] Search Product Toggle Filters Action',
  SearchProductChangePageSizeAction = '[@daffodil/search-product] Search Product Change Page Size Action',
  SearchProductChangeCurrentPageAction = '[@daffodil/search-product] Search Product Change Current Page Action',
  SearchProductChangeSortingOptionAction = '[@daffodil/search-product] Search Product Change Sorting Option Action',
}

/**
 * @inheritdoc
 */
export class DaffSearchProductCollectionReplaceFilters implements DaffCollectionReplaceFilters {
  readonly type = DaffSearchProductCollectionActionTypes.SearchProductReplaceFiltersAction;

  constructor(public filters: DaffFilterRequest[]) {}
}

/**
 * @inheritdoc
 */
export class DaffSearchProductCollectionApplyFilters implements DaffCollectionApplyFilters {
  readonly type = DaffSearchProductCollectionActionTypes.SearchProductApplyFiltersAction;

  constructor(public filters: DaffFilterRequest[]) {}
}

/**
 * @inheritdoc
 */
export class DaffSearchProductCollectionRemoveFilters implements DaffCollectionRemoveFilters {
  readonly type = DaffSearchProductCollectionActionTypes.SearchProductRemoveFiltersAction;

  constructor(public filters: DaffFilterRequest[]) {}
}

/**
 * @inheritdoc
 */
export class DaffSearchProductCollectionClearFilters implements DaffCollectionClearFilters {
  readonly type = DaffSearchProductCollectionActionTypes.SearchProductClearFiltersAction;
}

/**
 * @inheritdoc
 */
export class DaffSearchProductCollectionToggleFilter implements DaffCollectionToggleFilter {
  readonly type = DaffSearchProductCollectionActionTypes.SearchProductToggleFiltersAction;

  constructor(public filter: DaffFilterToggleRequest) {}
}

/**
 * @inheritdoc
 */
export class DaffSearchProductCollectionChangePageSize implements DaffCollectionChangePageSize {
  readonly type = DaffSearchProductCollectionActionTypes.SearchProductChangePageSizeAction;

  constructor(public pageSize: number) {}
}

/**
 * @inheritdoc
 */
export class DaffSearchProductCollectionChangeCurrentPage implements DaffCollectionChangeCurrentPage {
  readonly type = DaffSearchProductCollectionActionTypes.SearchProductChangeCurrentPageAction;

  constructor(public currentPage: number) {}
}

/**
 * @inheritdoc
 */
export class DaffSearchProductCollectionChangeSortingOption implements DaffCollectionChangeSortingOption {
  readonly type = DaffSearchProductCollectionActionTypes.SearchProductChangeSortingOptionAction;

  constructor(public sort: {
    option: DaffCollectionRequest['appliedSortOption'];
    direction: DaffCollectionRequest['appliedSortDirection'];
  }) {}
}

/**
 * A union of the search product action types.
 */
export type DaffSearchProductCollectionActions =
  | DaffSearchProductCollectionReplaceFilters
  | DaffSearchProductCollectionApplyFilters
  | DaffSearchProductCollectionRemoveFilters
  | DaffSearchProductCollectionClearFilters
  | DaffSearchProductCollectionToggleFilter
  | DaffSearchProductCollectionChangePageSize
  | DaffSearchProductCollectionChangeCurrentPage
  | DaffSearchProductCollectionChangeSortingOption;
