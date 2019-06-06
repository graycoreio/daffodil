import { Action } from '@ngrx/store';

import { Product } from 'product/src/models/product';

export enum BestSellersActionTypes {
    BestSellersLoadAction = "[BestSellers] Load Action",
    BestSellersLoadSuccessAction = "[BestSellers] Load Success Action",
    BestSellersLoadFailureAction = "[BestSellers] Load Failure Action",
    BestSellersResetAction = "[BestSellers] Reset Action"
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

export class BestSellersReset implements Action {
  readonly type = BestSellersActionTypes.BestSellersResetAction;

  constructor() {}
}

export type BestSellersActions = 
    | BestSellersLoad 
    | BestSellersLoadSuccess
    | BestSellersLoadFailure
    | BestSellersReset;
    