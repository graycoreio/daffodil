import {
  DaffCollectionChangePageSize,
  DaffCollectionChangeCurrentPage,
  DaffCollectionChangeSortingOption,
} from '@daffodil/core/state';
import {
  DaffProductCollectionRequest,
  DaffProductFilterRequest,
  DaffProductFilterToggleRequest,
} from '@daffodil/product';
import {
  DaffProductCollectionReplaceFilters,
  DaffProductCollectionApplyFilters,
  DaffProductCollectionRemoveFilters,
  DaffProductCollectionToggleFilter,
  DaffProductCollectionClearFilters,
} from '@daffodil/product/state';

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
export class DaffSearchProductCollectionReplaceFilters implements DaffProductCollectionReplaceFilters {
  readonly type = DaffSearchProductCollectionActionTypes.SearchProductReplaceFiltersAction;

  constructor(public filters: DaffProductFilterRequest[]) {}
}

/**
 * @inheritdoc
 */
export class DaffSearchProductCollectionApplyFilters implements DaffProductCollectionApplyFilters {
  readonly type = DaffSearchProductCollectionActionTypes.SearchProductApplyFiltersAction;

  constructor(public filters: DaffProductFilterRequest[]) {}
}

/**
 * @inheritdoc
 */
export class DaffSearchProductCollectionRemoveFilters implements DaffProductCollectionRemoveFilters {
  readonly type = DaffSearchProductCollectionActionTypes.SearchProductRemoveFiltersAction;

  constructor(public filters: DaffProductFilterRequest[]) {}
}

/**
 * @inheritdoc
 */
export class DaffSearchProductCollectionClearFilters implements DaffProductCollectionClearFilters {
  readonly type = DaffSearchProductCollectionActionTypes.SearchProductClearFiltersAction;
}

/**
 * @inheritdoc
 */
export class DaffSearchProductCollectionToggleFilter implements DaffProductCollectionToggleFilter {
  readonly type = DaffSearchProductCollectionActionTypes.SearchProductToggleFiltersAction;

  constructor(public filter: DaffProductFilterToggleRequest) {}
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
    option: DaffProductCollectionRequest['appliedSortOption'];
    direction: DaffProductCollectionRequest['appliedSortDirection'];
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
