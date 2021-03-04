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

export enum DaffCategoryActionTypes {
  CategoryLoadAction = '[Daff-Category] Category Load Action',
  CategoryLoadSuccessAction = '[Daff-Category] Category Load Success Action',
  CategoryLoadFailureAction = '[Daff-Category] Category Load Failure Action',
  CategoryPageLoadAction = '[Daff-Category] Category Page Load Action',
  CategoryPageLoadSuccessAction = '[Daff-Category] Category Page Load Success Action',
  CategoryPageLoadFailureAction = '[Daff-Category] Category Page Load Failure Action',
  ChangeCategoryPageSizeAction = '[Daff-Category] Change Category Page Size Action',
  ChangeCategoryCurrentPageAction = '[Daff-Category] Change Category Current Page Action',
  ChangeCategorySortingOptionAction = '[Daff-Category] Change Category Sorting Option Action',
	ChangeCategoryFiltersAction = '[Daff-Category] Change Category Filters Action',
	ToggleCategoryFilterAction = '[Daff-Category] Toggle Category Filter Action'
}

/**
 * An action triggered to initialize a category load request.
 *
 * @param request - DaffCategoryRequest object
 */
export class DaffCategoryLoad<T extends DaffCategoryRequest = DaffCategoryRequest> implements Action {
  readonly type = DaffCategoryActionTypes.CategoryLoadAction;

  constructor(public request: T) { }
}

/**
 * An action triggered upon a successful category request.
 *
 * @param response - DaffGetCategoryResponse object
 */
export class DaffCategoryLoadSuccess<
	T extends DaffCategoryRequest = DaffCategoryRequest,
	V extends DaffGenericCategory<V> = DaffCategory,
	U extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>,
	W extends DaffProduct = DaffProduct
> implements Action {
  readonly type = DaffCategoryActionTypes.CategoryLoadSuccessAction;

  constructor(public response: DaffGetCategoryResponse<T, V, U, W>) { }
}

/**
 * An action triggered upon a failed category request.
 *
 * @param errorMessage - an error message
 */
export class DaffCategoryLoadFailure implements Action {
  readonly type = DaffCategoryActionTypes.CategoryLoadFailureAction;

  constructor(public errorMessage: string) { }
}

/**
 * An action triggered to initialize a category page load request.
 * This is intended to be used for loading full category pages.
 *
 * @param request - DaffCategoryRequest object
 */
export class DaffCategoryPageLoad<T extends DaffCategoryRequest = DaffCategoryRequest> implements Action {
  readonly type = DaffCategoryActionTypes.CategoryPageLoadAction;

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
  readonly type = DaffCategoryActionTypes.CategoryPageLoadSuccessAction;

  constructor(public response: DaffGetCategoryResponse<T, V, U, W>) { }
}

/**
 * An action triggered upon a failed category page request.
 *
 * @param errorMessage - an error message
 */
export class DaffCategoryPageLoadFailure implements Action {
  readonly type = DaffCategoryActionTypes.CategoryPageLoadFailureAction;

  constructor(public errorMessage: string) { }
}

/**
 * An action for changing the number of products shown on each page for the selected category.
 *
 * @param pageSize - The number of products per page.
 */
export class DaffChangeCategoryPageSize implements Action {
  readonly type = DaffCategoryActionTypes.ChangeCategoryPageSizeAction;

  constructor(public pageSize: number) { }
}

/**
 * An action for changing the current page of products for the selected category.
 *
 * @param currentPage - The current page of products for the selected category.
 */
export class DaffChangeCategoryCurrentPage implements Action {
  readonly type = DaffCategoryActionTypes.ChangeCategoryCurrentPageAction;

  constructor(public currentPage: number) { }
}

/**
 * An action for changing the sorting option for the selected category.
 *
 * @param sort - The sort option to be applied.
 */
export class DaffChangeCategorySortingOption implements Action {
  readonly type = DaffCategoryActionTypes.ChangeCategorySortingOptionAction;

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
  readonly type = DaffCategoryActionTypes.ChangeCategoryFiltersAction;

  constructor(public filters: DaffCategoryFilterRequest[]) { }
}

/**
 * An action for toggling a filters for the selected category.
 *
 * @param filter - Filter to be toggle on the selected category.
 */
export class DaffToggleCategoryFilter implements Action {
  readonly type = DaffCategoryActionTypes.ToggleCategoryFilterAction;

  constructor(public filter: DaffToggleCategoryFilterRequest) { }
}

export type DaffCategoryActions<
	T extends DaffCategoryRequest = DaffCategoryRequest,
	U extends DaffGenericCategory<U> = DaffCategory,
	V extends DaffCategoryPageConfigurationState<T> = DaffCategoryPageConfigurationState<T>,
	W extends DaffProduct = DaffProduct
> =
  | DaffCategoryLoad<T>
  | DaffCategoryLoadSuccess<T, U, V, W>
  | DaffCategoryLoadFailure
  | DaffCategoryPageLoad<T>
  | DaffCategoryPageLoadSuccess<T, U, V, W>
  | DaffCategoryPageLoadFailure
	| DaffChangeCategoryPageSize
	| DaffChangeCategoryCurrentPage
  | DaffChangeCategorySortingOption
  | DaffChangeCategoryFilters
  | DaffToggleCategoryFilter;
