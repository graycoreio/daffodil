import { Action } from '@ngrx/store';

import { DaffCategory } from '../models/category';

export enum DaffCategoryActionTypes {
  CategoryLoadAction = '[Daff-Category] Category Load Action',
  CategoryLoadSuccessAction = '[Daff-Category] Category Load Success Action',
  CategoryLoadFailureAction = '[Daff-Category] Category Load Failure Action'
}

export class DaffCategoryLoad implements Action {
  readonly type = DaffCategoryActionTypes.CategoryLoadAction;

  constructor(public payload: string) { }
}

export class DaffCategoryLoadSuccess implements Action {
  readonly type = DaffCategoryActionTypes.CategoryLoadSuccessAction;

  constructor(public payload: DaffCategory) { }
}

export class DaffCategoryLoadFailure implements Action {
  readonly type = DaffCategoryActionTypes.CategoryLoadFailureAction;

  constructor(public payload: string) { }
}

export type DaffCategoryActions =
  | DaffCategoryLoad
  | DaffCategoryLoadSuccess
  | DaffCategoryLoadFailure;
