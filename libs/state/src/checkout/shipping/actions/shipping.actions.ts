import { Action } from '@ngrx/store';

import { ShippingAddress } from '@daffodil/core';

export enum ShippingActionTypes {
  UpdateShippingInfoAction = "[Shipping] Update Shipping Info Action",
  SelectShippingOptionAction = "[Shipping] Select Shipping Option Action"
}

export class UpdateShippingInfo implements Action {
  readonly type = ShippingActionTypes.UpdateShippingInfoAction;

  constructor(public payload: ShippingAddress) {}
}

export class SelectShippingOption implements Action {
  readonly type = ShippingActionTypes.SelectShippingOptionAction;

  constructor(public payload: string) {}
}

export type ShippingActions =
    | UpdateShippingInfo
    | SelectShippingOption;
