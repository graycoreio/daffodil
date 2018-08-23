import { Action } from '@ngrx/store';

import { DaffodilAddress } from '@daffodil/core';

export enum ShippingActionTypes {
  UpdateShippingInfoAction = "[Shipping] Update Shipping Info Action",
  SelectShippingOptionAction = "[Shipping] Select Shipping Option Action"
}

export class UpdateShippingInfo implements Action {
  readonly type = ShippingActionTypes.UpdateShippingInfoAction;

  constructor(public payload: DaffodilAddress) {}
}

export class SelectShippingOption implements Action {
  readonly type = ShippingActionTypes.SelectShippingOptionAction;

  constructor(public payload: number) {}
}

export type ShippingActions =
    | UpdateShippingInfo
    | SelectShippingOption;
