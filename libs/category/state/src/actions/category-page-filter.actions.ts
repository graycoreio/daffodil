import { Action } from '@ngrx/store';

import { DaffCategoryRequest } from '@daffodil/category';
import {
  DaffFilterRequest,
  DaffFilterToggleRequest,
} from '@daffodil/core';

/**
 * The possible types of category page filter actions.
 */
export enum DaffCategoryPageProductCollectionActionTypes {
  CategoryPageReplaceFiltersAction = '[@daffodil/category] Category Page Replace Filters Action',
  CategoryPageApplyFiltersAction = '[@daffodil/category] Category Page Apply Filters Action',
  CategoryPageRemoveFiltersAction = '[@daffodil/category] Category Page Remove Filters Action',
  CategoryPageClearFiltersAction = '[@daffodil/category] Category Page Clear Filters Action',
  CategoryPageToggleFilterAction = '[@daffodil/category] Category Page Toggle Filter Action',
  CategoryPageChangeSizeAction = '[@daffodil/category] Category Page Change Size Action',
  CategoryPageChangeCurrentPageAction = '[@daffodil/category] Category Page Change Current Page Action',
  CategoryPageChangeSortingOptionAction = '[@daffodil/category] Category Page Change Sorting Option Action',
}

/**
 * An action for replacing the filters for the current category.
 * All existing filters will be removed and the specified filters will be applied.
 *
 * @param filters - Filters to be set on the current category.
 */
export class DaffCategoryPageReplaceFilters implements Action {
  readonly type = DaffCategoryPageProductCollectionActionTypes.CategoryPageReplaceFiltersAction;

  constructor(public filters: DaffFilterRequest[]) { }
}

/**
 * An action for applying the specified filters for the current category.
 *
 * @param filters - Filters to be applied to the current category.
 */
export class DaffCategoryPageApplyFilters implements Action {
  readonly type = DaffCategoryPageProductCollectionActionTypes.CategoryPageApplyFiltersAction;

  constructor(public filters: DaffFilterRequest[]) { }
}

/**
 * An action for removing the specified filters for the current category.
 *
 * @param filters - Filters to be removed from the current category.
 */
export class DaffCategoryPageRemoveFilters implements Action {
  readonly type = DaffCategoryPageProductCollectionActionTypes.CategoryPageRemoveFiltersAction;

  constructor(public filters: DaffFilterRequest[]) { }
}

/**
 * An action for removing all the filters for the current category.
 */
export class DaffCategoryPageClearFilters implements Action {
  readonly type = DaffCategoryPageProductCollectionActionTypes.CategoryPageClearFiltersAction;
}

/**
 * An action for toggling a filters for the current category.
 *
 * @param filter - Filter to be toggled on the current category.
 */
export class DaffCategoryPageToggleFilter implements Action {
  readonly type = DaffCategoryPageProductCollectionActionTypes.CategoryPageToggleFilterAction;

  constructor(public filter: DaffFilterToggleRequest) { }
}


/**
 * An action for changing the number of products shown on each page for the selected category.
 *
 * @param pageSize - The number of products per page.
 */
export class DaffCategoryPageChangePageSize implements Action {
  readonly type = DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeSizeAction;

  constructor(public pageSize: number) { }
}

/**
 * An action for changing the current page of products for the selected category.
 *
 * @param currentPage - The current page of products for the selected category.
 */
export class DaffCategoryPageChangeCurrentPage implements Action {
  readonly type = DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeCurrentPageAction;

  constructor(public currentPage: number) { }
}

/**
 * An action for changing the sorting option for the selected category.
 *
 * @param sort - The sort option to be applied.
 */
export class DaffCategoryPageChangeSortingOption implements Action {
  readonly type = DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeSortingOptionAction;

  constructor(
    public sort: {
      option: DaffCategoryRequest['appliedSortOption'];
      direction: DaffCategoryRequest['appliedSortDirection'];
    },
  ) { }
}

export type DaffCategoryPageProductCollectionActions =
  | DaffCategoryPageReplaceFilters
  | DaffCategoryPageApplyFilters
  | DaffCategoryPageRemoveFilters
  | DaffCategoryPageClearFilters
  | DaffCategoryPageToggleFilter
  | DaffCategoryPageChangePageSize
  | DaffCategoryPageChangeCurrentPage
  | DaffCategoryPageChangeSortingOption;
