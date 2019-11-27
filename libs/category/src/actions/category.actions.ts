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

export class DaffCategoryLoad implements Action {
  readonly type = DaffCategoryActionTypes.CategoryLoadAction;

  constructor(public payload: DaffCategoryRequest) { }
}

export class DaffCategoryLoadSuccess implements Action {
  readonly type = DaffCategoryActionTypes.CategoryLoadSuccessAction;

  constructor(public payload: DaffGetCategoryResponse) { }
}

export class DaffCategoryLoadFailure implements Action {
  readonly type = DaffCategoryActionTypes.CategoryLoadFailureAction;

  constructor(public payload: string) { }
}

export class DaffChangeCategoryPageSize implements Action {
  readonly type = DaffCategoryActionTypes.ChangeCategoryPageSizeAction;

  constructor(public payload: number) { }
}

export class DaffChangeCategoryCurrentPage implements Action {
  readonly type = DaffCategoryActionTypes.ChangeCategoryCurrentPageAction;

  constructor(public payload: number) { }
}

export class DaffChangeCategorySortingOption implements Action {
  readonly type = DaffCategoryActionTypes.ChangeCategorySortingOptionAction;

  constructor(public payload: number) { }
}

export class DaffChangeCategoryFilters implements Action {
  readonly type = DaffCategoryActionTypes.ChangeCategoryFiltersAction;

  constructor(public payload: number) { }
}

export type DaffCategoryActions =
  | DaffCategoryLoad
  | DaffCategoryLoadSuccess
  | DaffCategoryLoadFailure
  | DaffChangeCategoryPageSize
  | DaffChangeCategorySortingOption
  | DaffChangeCategoryFilters;
