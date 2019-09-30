import { Action } from '@ngrx/store';

export enum ShippingActionTypes {
  ToggleShowShippingFormAction = '[Demo-Shipping] Toggle Show Shipping Form Action',
  SetShowShippingFormAction = '[Demo-Shipping] Set Show Shipping Form Action'
}

export class ToggleShowShippingForm implements Action {
  readonly type = ShippingActionTypes.ToggleShowShippingFormAction;

  constructor() {}
}

export class SetShowShippingForm implements Action {
  readonly type = ShippingActionTypes.SetShowShippingFormAction;

  constructor(public payload: boolean) {}
}

export type ShippingActions =
    | ToggleShowShippingForm
    | SetShowShippingForm;
