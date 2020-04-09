import { Action } from '@ngrx/store';

import { DaffGetCategoryResponse } from '../models/get-category-response';
import { DaffCategoryRequest } from '../models/requests/category-request';
import { DaffCategoryFilterRequest, DaffToggleCategoryFilterRequest } from '../models/requests/filter-request';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffGenericCategory } from '../models/generic-category';

export enum DaffCategoryActionTypes {
  CategoryLoadAction = '[Daff-Category] Category Load Action',
  CategoryLoadSuccessAction = '[Daff-Category] Category Load Success Action',
  CategoryLoadFailureAction = '[Daff-Category] Category Load Failure Action',
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
export class DaffCategoryLoad<T extends DaffCategoryRequest> implements Action {
  readonly type = DaffCategoryActionTypes.CategoryLoadAction;

  constructor(public request: T) { }
}

/**
 * An action triggered upon a successful category request.
 * 
 * @param response - DaffGetCategoryResponse object
 */
export class DaffCategoryLoadSuccess<T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>> implements Action {
  readonly type = DaffCategoryActionTypes.CategoryLoadSuccessAction;

  constructor(public response: DaffGetCategoryResponse<T, V, U>) { }
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
			option: DaffCategoryRequest['applied_sort_option'], 
			direction: DaffCategoryRequest['applied_sort_direction']
		}
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
	T extends DaffCategoryRequest, 
	U extends DaffGenericCategory<U>, 
	V extends DaffCategoryPageConfigurationState<T>
> =
  | DaffCategoryLoad<T>
  | DaffCategoryLoadSuccess<T, U, V>
  | DaffCategoryLoadFailure
	| DaffChangeCategoryPageSize
	| DaffChangeCategoryCurrentPage
  | DaffChangeCategorySortingOption
  | DaffChangeCategoryFilters
  | DaffToggleCategoryFilter;
