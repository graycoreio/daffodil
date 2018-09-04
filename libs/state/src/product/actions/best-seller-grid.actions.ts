import { Action } from '@ngrx/store';

import { Product } from '@daffodil/core';

export enum BestSellerGridActionTypes {
    BestSellerGridLoadAction = "[BestSellerGrid] Load Action",
    BestSellerGridLoadSuccessAction = "[BestSellerGrid] Load Success Action",
    BestSellerGridLoadFailureAction = "[BestSellerGrid] Load Failure Action"
}

export class BestSellerGridLoad implements Action {
  readonly type = BestSellerGridActionTypes.BestSellerGridLoadAction;

  constructor() {}
}

export class BestSellerGridLoadSuccess implements Action {
    readonly type = BestSellerGridActionTypes.BestSellerGridLoadSuccessAction;

    constructor(public payload: Product[]) {}
}

export class BestSellerGridLoadFailure implements Action {
  readonly type = BestSellerGridActionTypes.BestSellerGridLoadFailureAction;

  constructor(public payload: string) {}
}

export type BestSellerGridActions = 
    | BestSellerGridLoad 
    | BestSellerGridLoadSuccess
    | BestSellerGridLoadFailure;