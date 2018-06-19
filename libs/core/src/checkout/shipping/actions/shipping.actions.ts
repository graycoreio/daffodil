import { Action } from '@ngrx/store';

import { ShippingAddress } from '../models/shipping-address';

export enum ShippingActionTypes {
  UpdateShippingAction = "[Shipping] Load Action"
}

export class UpdateShipping implements Action {
  readonly type = ShippingActionTypes.UpdateShippingAction;

  constructor(public payload: ShippingAddress) {}
}

export type ShippingActions =
    | UpdateShipping;
