import { Action } from '@ngrx/store';

import { DaffAddress } from '@daffodil/core';

export enum ShippingActionTypes {
  UpdateShippingAddressAction = '[Shipping] Update Shipping Address Action',
  SelectShippingOptionAction = '[Shipping] Select Shipping Option Action'
}

export class UpdateShippingAddress implements Action {
  readonly type = ShippingActionTypes.UpdateShippingAddressAction;

  constructor(public payload: DaffAddress) {}
}

export class SelectShippingOption implements Action {
  readonly type = ShippingActionTypes.SelectShippingOptionAction;

  constructor(public payload: string) {}
}

export type ShippingActions =
    | UpdateShippingAddress
    | SelectShippingOption;
