import { Action } from '@ngrx/store';

import { DaffProduct } from '../models/product';

export enum DaffBestSellersActionTypes {
    BestSellersLoadAction = "[BestSellers] Load Action",
    BestSellersLoadSuccessAction = "[BestSellers] Load Success Action",
    BestSellersLoadFailureAction = "[BestSellers] Load Failure Action",
    BestSellersResetAction = "[BestSellers] Reset Action"
}

export class DaffBestSellersLoad implements Action {
  readonly type = DaffBestSellersActionTypes.BestSellersLoadAction;

  constructor() {}
}

export class DaffBestSellersLoadSuccess implements Action {
    readonly type = DaffBestSellersActionTypes.BestSellersLoadSuccessAction;

    constructor(public payload: DaffProduct[]) {}
}

export class DaffBestSellersLoadFailure implements Action {
  readonly type = DaffBestSellersActionTypes.BestSellersLoadFailureAction;

  constructor(public payload: string) {}
}

export class DaffBestSellersReset implements Action {
  readonly type = DaffBestSellersActionTypes.BestSellersResetAction;

  constructor() {}
}

export type DaffBestSellersActions = 
    | DaffBestSellersLoad 
    | DaffBestSellersLoadSuccess
    | DaffBestSellersLoadFailure
    | DaffBestSellersReset;
    