import { Action } from '@ngrx/store';

import { ShippingAddress } from '../models/shipping-address';

export enum ShippingActionTypes {
  UpdateShippingInfoAction = "[Shipping] Update Shipping Info Action",
  UpdateShippingOptionAction = "[Shipping] Update Shipping Option Action"
}

export class UpdateShippingInfo implements Action {
  readonly type = ShippingActionTypes.UpdateShippingInfoAction;

  constructor(public payload: ShippingAddress) {}
}

export class UpdateShippingOption implements Action {
  readonly type = ShippingActionTypes.UpdateShippingOptionAction;

  constructor(public payload: string) {}
}

export type ShippingActions =
    | UpdateShippingInfo
    | UpdateShippingOption;
