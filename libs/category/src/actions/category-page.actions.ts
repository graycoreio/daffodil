import { Action } from '@ngrx/store';

import { DaffProduct } from '@daffodil/product';

import { DaffCategory } from '../models/category';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffGenericCategory } from '../models/generic-category';
import { DaffGetCategoryResponse } from '../models/get-category-response';
import { DaffCategoryRequest } from '../models/requests/category-request';
import {
  DaffCategoryFilterRequest,
  DaffToggleCategoryFilterRequest,
} from '../models/requests/filter-request';

export enum DaffCategoryPageActionTypes {
  CategoryPageLoadAction = '[Daff-Category] Category Page Load Action',
  CategoryPageLoadSuccessAction = '[Daff-Category] Category Page Load Success Action',
  CategoryPageLoadFailureAction = '[Daff-Category] Category Page Load Failure Action',
  CategoryPageChangeSizeAction = '[Daff-Category] Change Category Page Size Action',
  CategoryPageChangeCurrentPageAction = '[Daff-Category] Category Page Change Current Page Action',
  CategoryPageChangeSortingOptionAction = '[Daff-Category] Category Page Change Sorting Option Action',
  CategoryPageChangeFiltersAction = '[Daff-Category] Category Page Change Filters Action',
  CategoryPageToggleFilterAction = '[Daff-Category] Category Page Toggle Filter Action'
}

/**
 * An action triggered to initialize a category page load request.
 * This is intended to be used for loading full category pages.
 *
 * @param request - DaffCategoryRequest object
 */
export class DaffCategoryPageLoad<T extends DaffCategoryRequest = DaffCategoryRequest> implements Action {
  readonly type = DaffCategoryPageActionTypes.CategoryPageLoadAction;

  constructor(public request: T) { }
}

/**
 * An action triggered upon a successful category page request.
 *
 * @param response - DaffGetCategoryResponse object
 */
export class DaffCategoryPageLoadSuccess<
  T extends DaffCategoryRequest = DaffCategoryRequest,
  V extends DaffGenericCategory<V> = DaffCategory,
  U extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>,
  W extends DaffProduct = DaffProduct
  > implements Action {
  readonly type = DaffCategoryPageActionTypes.CategoryPageLoadSuccessAction;

  constructor(public response: DaffGetCategoryResponse<T, V, U, W>) { }
}

/**
 * An action triggered upon a failed category page request.
 *
 * @param errorMessage - an error message
 */
export class DaffCategoryPageLoadFailure implements Action {
  readonly type = DaffCategoryPageActionTypes.CategoryPageLoadFailureAction;

  constructor(public errorMessage: string) { }
}

/**
 * An action for changing the number of products shown on each page for the selected category.
 *
 * @param pageSize - The number of products per page.
 */
export class DaffChangeCategoryPageSize implements Action {
  readonly type = DaffCategoryPageActionTypes.CategoryPageChangeSizeAction;

  constructor(public pageSize: number) { }
}

/**
 * An action for changing the current page of products for the selected category.
 *
 * @param currentPage - The current page of products for the selected category.
 */
export class DaffChangeCategoryCurrentPage implements Action {
  readonly type = DaffCategoryPageActionTypes.CategoryPageChangeCurrentPageAction;

  constructor(public currentPage: number) { }
}

/**
 * An action for changing the sorting option for the selected category.
 *
 * @param sort - The sort option to be applied.
 */
export class DaffChangeCategorySortingOption implements Action {
  readonly type = DaffCategoryPageActionTypes.CategoryPageChangeSortingOptionAction;

  constructor(
    public sort: {
      option: DaffCategoryRequest['applied_sort_option'];
      direction: DaffCategoryRequest['applied_sort_direction'];
    },
  ) { }
}

/**
 * An action for changing the filters for the selected category.
 *
 * @param filters - Filters to be applied to the selected category.
 */
export class DaffChangeCategoryFilters implements Action {
  readonly type = DaffCategoryPageActionTypes.CategoryPageChangeFiltersAction;

  constructor(public filters: DaffCategoryFilterRequest[]) { }
}

/**
 * An action for toggling a filters for the selected category.
 *
 * @param filter - Filter to be toggle on the selected category.
 */
export class DaffToggleCategoryFilter implements Action {
  readonly type = DaffCategoryPageActionTypes.CategoryPageToggleFilterAction;

  constructor(public filter: DaffToggleCategoryFilterRequest) { }
}

export type DaffCategoryPageActions<
  T extends DaffCategoryRequest = DaffCategoryRequest,
  U extends DaffGenericCategory<U> = DaffCategory,
  V extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>,
  W extends DaffProduct = DaffProduct
  > =
  | DaffCategoryPageLoad<T>
  | DaffCategoryPageLoadSuccess<T, U, V, W>
  | DaffCategoryPageLoadFailure
  | DaffChangeCategoryPageSize
  | DaffChangeCategoryCurrentPage
  | DaffChangeCategorySortingOption
  | DaffChangeCategoryFilters
  | DaffToggleCategoryFilter;
