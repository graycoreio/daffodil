import { Action } from '@ngrx/store';

import { DaffGetCategoryResponse } from '../models/get-category-response';
import { DaffCategoryRequest } from '../models/category-request';

export enum DaffCategoryActionTypes {
  CategoryLoadAction = '[Daff-Category] Category Load Action',
  CategoryLoadSuccessAction = '[Daff-Category] Category Load Success Action',
  CategoryLoadFailureAction = '[Daff-Category] Category Load Failure Action',
  ChangeCategoryPageSizeAction = '[Daff-Category] Change Category Page Size Action',
  ChangeCategoryCurrentPageAction = '[Daff-Category] Change Category Current Page Action',
  ChangeCategorySortingOptionAction = '[Daff-Category] Change Category Sorting Option Action',
  ChangeCategoryFiltersAction = '[Daff-Category] Change Category Filters Action'
}

/**
 * An action triggered to initialize a category load request.
 * 
 * @param categoryRequest - DaffCategoryRequest object
 */
export class DaffCategoryLoad implements Action {
  readonly type = DaffCategoryActionTypes.CategoryLoadAction;

  constructor(public categoryRequest: DaffCategoryRequest) { }
}

/**
 * An action triggered upon a successful category request.
 * 
 * @param categoryResponse - DaffGetCategoryResponse object
 */
export class DaffCategoryLoadSuccess implements Action {
  readonly type = DaffCategoryActionTypes.CategoryLoadSuccessAction;

  constructor(public categoryResponse: DaffGetCategoryResponse) { }
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
 * @param sortingOption - A sorting option for the selected category.
 */
export class DaffChangeCategorySortingOption implements Action {
  readonly type = DaffCategoryActionTypes.ChangeCategorySortingOptionAction;

  constructor(public sortingOption: string) { }
}

/**
 * An action for changing the filters for the selected category.
 * 
 * todo: determine if this payload should be DaffCategoryFilter[] or string[].
 * @param categoryFilters - Filters to be applied to the selected category.
 */
export class DaffChangeCategoryFilters implements Action {
  readonly type = DaffCategoryActionTypes.ChangeCategoryFiltersAction;

  constructor(public categoryFilters: string[]) { }
}

export type DaffCategoryActions =
  | DaffCategoryLoad
  | DaffCategoryLoadSuccess
  | DaffCategoryLoadFailure
  | DaffChangeCategoryPageSize
  | DaffChangeCategorySortingOption
  | DaffChangeCategoryFilters;
