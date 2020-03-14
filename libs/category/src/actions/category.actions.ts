import { Action } from '@ngrx/store';

import { DaffGetCategoryResponse } from '../models/get-category-response';
import { DaffCategoryRequest } from '../models/requests/category-request';
import { DaffCategoryFilterAction } from '../models/requests/filter-action';

export enum DaffCategoryActionTypes {
  CategoryLoadAction = '[Daff-Category] Category Load Action',
  CategoryLoadSuccessAction = '[Daff-Category] Category Load Success Action',
  CategoryLoadFailureAction = '[Daff-Category] Category Load Failure Action',
  ChangeCategoryPageSizeAction = '[Daff-Category] Change Category Page Size Action',
  ChangeCategoryPageSizeSuccessAction = '[Daff-Category] Category Load Success Action',
  ChangeCategoryPageSizeFailureAction = '[Daff-Category] Category Load Failure Action',
  ChangeCategoryCurrentPageAction = '[Daff-Category] Change Category Current Page Action',
  ChangeCategoryCurrentPageSuccessAction = '[Daff-Category] Category Load Success Action',
  ChangeCategoryCurrentPageFailureAction = '[Daff-Category] Category Load Failure Action',
  ChangeCategorySortingOptionAction = '[Daff-Category] Change Category Sorting Option Action',
  ChangeCategorySortingOptionSuccessAction = '[Daff-Category] Category Load Success Action',
  ChangeCategorySortingOptionFailureAction = '[Daff-Category] Category Load Failure Action',
	ChangeCategoryFiltersAction = '[Daff-Category] Change Category Filters Action',
  ChangeCategoryFiltersSuccessAction = '[Daff-Category] Category Load Success Action',
  ChangeCategoryFiltersFailureAction = '[Daff-Category] Category Load Failure Action',
	ToggleCategoryFilterAction = '[Daff-Category] Toggle Category Filter Action',
  ToggleCategoryFilterSuccessAction = '[Daff-Category] Category Load Success Action',
  ToggleCategoryFilterFailureAction = '[Daff-Category] Category Load Failure Action'
}

/**
 * An action triggered to initialize a category load request.
 * 
 * @param request - DaffCategoryRequest object
 */
export class DaffCategoryLoad implements Action {
  readonly type = DaffCategoryActionTypes.CategoryLoadAction;

  constructor(public request: DaffCategoryRequest) { }
}

/**
 * An action triggered upon a successful category request.
 * 
 * @param response - DaffGetCategoryResponse object
 */
export class DaffCategoryLoadSuccess implements Action {
  readonly type = DaffCategoryActionTypes.CategoryLoadSuccessAction;

  constructor(public response: DaffGetCategoryResponse) { }
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
 * An action triggered upon a successful category page size change.
 * 
 * @param response - DaffGetCategoryResponse object
 */
export class DaffChangeCategoryPageSizeSuccess implements Action {
  readonly type = DaffCategoryActionTypes.ChangeCategoryPageSizeSuccessAction;

  constructor(public response: DaffGetCategoryResponse) { }
}

/**
 * An action triggered upon a failed category page size change.
 * 
 * @param error - an error message
 */
export class DaffChangeCategoryPageSizeFailure implements Action {
  readonly type = DaffCategoryActionTypes.ChangeCategoryPageSizeFailureAction;

  constructor(public error: string) { }
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
 * An action triggered upon a successful category current page change.
 * 
 * @param response - DaffGetCategoryResponse object
 */
export class DaffChangeCategoryCurrentPageSuccess implements Action {
  readonly type = DaffCategoryActionTypes.ChangeCategoryCurrentPageSuccessAction;

  constructor(public response: DaffGetCategoryResponse) { }
}

/**
 * An action triggered upon a failed category current page change.
 * 
 * @param error - an error message
 */
export class DaffChangeCategoryCurrentPageFailure implements Action {
  readonly type = DaffCategoryActionTypes.ChangeCategoryCurrentPageFailureAction;

  constructor(public error: string) { }
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
 * An action triggered upon a successful category sorting option change.
 * 
 * @param response - DaffGetCategoryResponse object
 */
export class DaffChangeCategorySortingOptionSuccess implements Action {
  readonly type = DaffCategoryActionTypes.ChangeCategorySortingOptionSuccessAction;

  constructor(public response: DaffGetCategoryResponse) { }
}

/**
 * An action triggered upon a failed category sorting option change.
 * 
 * @param error - an error message
 */
export class DaffChangeCategorySortingOptionFailure implements Action {
  readonly type = DaffCategoryActionTypes.ChangeCategorySortingOptionFailureAction;

  constructor(public error: string) { }
}

/**
 * An action for changing the filters for the selected category.
 * 
 * @param filters - Filters to be applied to the selected category.
 */
export class DaffChangeCategoryFilters implements Action {
  readonly type = DaffCategoryActionTypes.ChangeCategoryFiltersAction;

  constructor(public filters: DaffCategoryRequest['applied_filters']) { }
}

/**
 * An action triggered upon a successful category filters change.
 * 
 * @param response - DaffGetCategoryResponse object
 */
export class DaffChangeCategoryFiltersSuccess implements Action {
  readonly type = DaffCategoryActionTypes.ChangeCategoryFiltersSuccessAction;

  constructor(public response: DaffGetCategoryResponse) { }
}

/**
 * An action triggered upon a failed category filters change.
 * 
 * @param error - an error message
 */
export class DaffChangeCategoryFiltersFailure implements Action {
  readonly type = DaffCategoryActionTypes.ChangeCategoryFiltersFailureAction;

  constructor(public error: string) { }
}

/**
 * An action for toggling a filters for the selected category.
 * 
 * @param filter - Filter to be toggle on the selected category.
 */
export class DaffToggleCategoryFilter implements Action {
  readonly type = DaffCategoryActionTypes.ToggleCategoryFilterAction;

  constructor(public filter: DaffCategoryFilterAction) { }
}

/**
 * An action triggered upon successfully toggling a filter.
 * 
 * @param response - DaffGetCategoryResponse object
 */
export class DaffToggleCategoryFilterSuccess implements Action {
  readonly type = DaffCategoryActionTypes.ToggleCategoryFilterSuccessAction;

  constructor(public response: DaffGetCategoryResponse) { }
}

/**
 * An action triggered upon a failed filter toggle.
 * 
 * @param error - an error message
 */
export class DaffToggleCategoryFilterFailure implements Action {
  readonly type = DaffCategoryActionTypes.ToggleCategoryFilterFailureAction;

  constructor(public error: string) { }
}

export type DaffCategoryActions =
  | DaffCategoryLoad
  | DaffCategoryLoadSuccess
  | DaffCategoryLoadFailure
  | DaffChangeCategoryPageSize
  | DaffChangeCategoryPageSizeSuccess
  | DaffChangeCategoryPageSizeFailure
  | DaffChangeCategorySortingOption
  | DaffChangeCategorySortingOptionSuccess
  | DaffChangeCategorySortingOptionFailure
  | DaffChangeCategoryFilters
  | DaffChangeCategoryFiltersSuccess
  | DaffChangeCategoryFiltersFailure
  | DaffToggleCategoryFilter
  | DaffToggleCategoryFilterSuccess
  | DaffToggleCategoryFilterFailure;
