import { Action } from '@ngrx/store';

import { Product } from '@daffodil/core';

export enum BestSellersActionTypes {
    BestSellersLoadAction = "[BestSellers] Load Action",
    BestSellersLoadSuccessAction = "[BestSellers] Load Success Action",
    BestSellersLoadFailureAction = "[BestSellers] Load Failure Action"
}

export class BestSellersLoad implements Action {
  readonly type = BestSellersActionTypes.BestSellersLoadAction;

  constructor() {}
}

export class BestSellersLoadSuccess implements Action {
    readonly type = BestSellersActionTypes.BestSellersLoadSuccessAction;

    constructor(public payload: Product[]) {}
}

export class BestSellersLoadFailure implements Action {
  readonly type = BestSellersActionTypes.BestSellersLoadFailureAction;

  constructor(public payload: string) {}
}

export type BestSellersActions = 
    | BestSellersLoad 
    | BestSellersLoadSuccess
    | BestSellersLoadFailure;