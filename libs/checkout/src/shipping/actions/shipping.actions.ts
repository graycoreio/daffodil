import { Action } from '@ngrx/store';

import { DaffAddress } from '@daffodil/core';

export enum DaffShippingActionTypes {
  UpdateShippingAddressAction = '[Shipping] Update Shipping Address Action',
  SelectShippingOptionAction = '[Shipping] Select Shipping Option Action'
}

export class DaffUpdateShippingAddress implements Action {
  readonly type = DaffShippingActionTypes.UpdateShippingAddressAction;

  constructor(public payload: DaffAddress) {}
}

export class DaffSelectShippingOption implements Action {
  readonly type = DaffShippingActionTypes.SelectShippingOptionAction;

  constructor(public payload: string) {}
}

export type DaffShippingActions =
    | DaffUpdateShippingAddress
    | DaffSelectShippingOption;
