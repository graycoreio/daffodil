import { Action } from '@ngrx/store';

import { DaffNavigationTree } from '../models/navigation-tree';

export enum DaffNavigationActionTypes {
  NavigationLoadAction = "[Daff-Navigation] Navigation Load Action",
  NavigationLoadSuccessAction = "[Daff-Navigation] Navigation Load Success Action",
  NavigationLoadFailureAction = "[Daff-Navigation] Navigation Load Failure Action"
}

export class DaffNavigationLoad implements Action {
  readonly type = DaffNavigationActionTypes.NavigationLoadAction;

  constructor(public payload: string) { }
}

export class DaffNavigationLoadSuccess implements Action {
  readonly type = DaffNavigationActionTypes.NavigationLoadSuccessAction;

  constructor(public payload: DaffNavigationTree) { }
}

export class DaffNavigationLoadFailure implements Action {
  readonly type = DaffNavigationActionTypes.NavigationLoadFailureAction;

  constructor(public payload: string) { }
}

export type DaffNavigationActions =
  | DaffNavigationLoad
  | DaffNavigationLoadSuccess
  | DaffNavigationLoadFailure;
