import { Action } from '@ngrx/store';

import { Address } from '../../../interfaces/models/address';

export enum ShippingActionTypes {
  UpdateShippingAction = "[Shipping] Load Action"
}

export class UpdateShipping implements Action {
  readonly type = ShippingActionTypes.UpdateShippingAction;

  constructor(public payload: Address) {}
}

export type ShippingActions =
    | UpdateShipping;
