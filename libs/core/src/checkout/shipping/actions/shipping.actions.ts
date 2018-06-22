import { Action } from '@ngrx/store';

import { ShippingAddress } from '../models/shipping-address';

export enum ShippingActionTypes {
  UpdateShippingInfoAction = "[Shipping Info] Load Action"
}

export class UpdateShippingInfo implements Action {
  readonly type = ShippingActionTypes.UpdateShippingInfoAction;

  constructor(public payload: ShippingAddress) {}
}

export type ShippingActions =
    | UpdateShippingInfo;
