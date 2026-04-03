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
export enum DaffSearchDocsCollectionActionTypes {
  SearchDocsReplaceFiltersAction = '[@daffodil/search-docs] Search Docs Replace Filters Action',
  SearchDocsApplyFiltersAction = '[@daffodil/search-docs] Search Docs Apply Filters Action',
  SearchDocsRemoveFiltersAction = '[@daffodil/search-docs] Search Docs Remove Filters Action',
  SearchDocsClearFiltersAction = '[@daffodil/search-docs] Search Docs Clear Filters Action',
  SearchDocsToggleFiltersAction = '[@daffodil/search-docs] Search Docs Toggle Filters Action',
  SearchDocsChangePageSizeAction = '[@daffodil/search-docs] Search Docs Change Page Size Action',
  SearchDocsChangeCurrentPageAction = '[@daffodil/search-docs] Search Docs Change Current Page Action',
  SearchDocsChangeSortingOptionAction = '[@daffodil/search-docs] Search Docs Change Sorting Option Action',
}

/**
 * @inheritdoc
 * @role action
 */
export class DaffSearchDocsCollectionReplaceFilters implements DaffCollectionReplaceFilters {
  readonly type = DaffSearchDocsCollectionActionTypes.SearchDocsReplaceFiltersAction;

  constructor(public filters: DaffFilterRequest[]) {}
}

/**
 * @inheritdoc
 * @role action
 */
export class DaffSearchDocsCollectionApplyFilters implements DaffCollectionApplyFilters {
  readonly type = DaffSearchDocsCollectionActionTypes.SearchDocsApplyFiltersAction;

  constructor(public filters: DaffFilterRequest[]) {}
}

/**
 * @inheritdoc
 * @role action
 */
export class DaffSearchDocsCollectionRemoveFilters implements DaffCollectionRemoveFilters {
  readonly type = DaffSearchDocsCollectionActionTypes.SearchDocsRemoveFiltersAction;

  constructor(public filters: DaffFilterRequest[]) {}
}

/**
 * @inheritdoc
 * @role action
 */
export class DaffSearchDocsCollectionClearFilters implements DaffCollectionClearFilters {
  readonly type = DaffSearchDocsCollectionActionTypes.SearchDocsClearFiltersAction;
}

/**
 * @inheritdoc
 * @role action
 */
export class DaffSearchDocsCollectionToggleFilter implements DaffCollectionToggleFilter {
  readonly type = DaffSearchDocsCollectionActionTypes.SearchDocsToggleFiltersAction;

  constructor(public filter: DaffFilterToggleRequest) {}
}

/**
 * @inheritdoc
 * @role action
 */
export class DaffSearchDocsCollectionChangePageSize implements DaffCollectionChangePageSize {
  readonly type = DaffSearchDocsCollectionActionTypes.SearchDocsChangePageSizeAction;

  constructor(public pageSize: number) {}
}

/**
 * @inheritdoc
 * @role action
 */
export class DaffSearchDocsCollectionChangeCurrentPage implements DaffCollectionChangeCurrentPage {
  readonly type = DaffSearchDocsCollectionActionTypes.SearchDocsChangeCurrentPageAction;

  constructor(public currentPage: number) {}
}

/**
 * @inheritdoc
 * @role action
 */
export class DaffSearchDocsCollectionChangeSortingOption implements DaffCollectionChangeSortingOption {
  readonly type = DaffSearchDocsCollectionActionTypes.SearchDocsChangeSortingOptionAction;

  constructor(public sort: {
    option: DaffCollectionRequest['appliedSortOption'];
    direction: DaffCollectionRequest['appliedSortDirection'];
  }) {}
}

/**
 * A union of the search docs action types.
 */
export type DaffSearchDocsCollectionActions =
  | DaffSearchDocsCollectionReplaceFilters
  | DaffSearchDocsCollectionApplyFilters
  | DaffSearchDocsCollectionRemoveFilters
  | DaffSearchDocsCollectionClearFilters
  | DaffSearchDocsCollectionToggleFilter
  | DaffSearchDocsCollectionChangePageSize
  | DaffSearchDocsCollectionChangeCurrentPage
  | DaffSearchDocsCollectionChangeSortingOption;
