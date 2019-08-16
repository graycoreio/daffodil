import { Action } from '@ngrx/store';

import { DaffCategory } from '../models/category';

export enum DaffCategoriesActionTypes {
  CategoriesLoadAction = "[Daff-Category] Categories Load Action",
  CategoriesLoadSuccessAction = "[Daff-Category] Categories Load Success Action",
  CategoriesLoadFailureAction = "[Daff-Category] Categories Load Failure Action"
}

export class DaffCategoriesLoad implements Action {
  readonly type = DaffCategoriesActionTypes.CategoriesLoadAction;

  constructor(public payload: string) { }
}

export class DaffCategoriesLoadSuccess implements Action {
  readonly type = DaffCategoriesActionTypes.CategoriesLoadSuccessAction;

  constructor(public payload: DaffCategory[]) { }
}

export class DaffCategoriesLoadFailure implements Action {
  readonly type = DaffCategoriesActionTypes.CategoriesLoadFailureAction;

  constructor(public payload: string) { }
}

export type DaffCategoriesActions =
  | DaffCategoriesLoad
  | DaffCategoriesLoadSuccess
  | DaffCategoriesLoadFailure;
