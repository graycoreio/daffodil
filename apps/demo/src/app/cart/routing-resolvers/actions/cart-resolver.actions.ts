import { Action } from '@ngrx/store';
import { Cart } from '@daffodil/core';

export enum CartResolverActionTypes {
  ResolveCartAction = "[Cart-Resolver] Resolve Cart Action",
  ResolveCartSuccessAction = "[Cart-Resolver] Resolve Cart Success Action",
  ResolveCartFailureAction = "[Cart-Resolver] Resolve Cart Failure Action"
}

export class ResolveCart implements Action {
  readonly type = CartResolverActionTypes.ResolveCartAction;

  constructor() {}
}

export class ResolveCartSuccess implements Action {
  readonly type = CartResolverActionTypes.ResolveCartSuccessAction;

  constructor(public payload: Cart) {}
}

export class ResolveCartFailure implements Action {
  readonly type = CartResolverActionTypes.ResolveCartFailureAction;

  constructor(public payload: Cart) {}
}

export type CartResolverActions =
  | ResolveCart
  | ResolveCartSuccess
  | ResolveCartFailure;
