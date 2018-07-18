import { Action } from '@ngrx/store';

export enum ShippingActionTypes {
  ToggleShippingFormAction = "[Foundation-Shipping] Toggle Shipping Form Action",
  SetShowShippingFormAction = "[Foundation-Shipping] Set Show Shipping Form Action"
}

export class ToggleShippingForm implements Action {
  readonly type = ShippingActionTypes.ToggleShippingFormAction;

  constructor() {}
}

export class SetShowShippingForm implements Action {
  readonly type = ShippingActionTypes.SetShowShippingFormAction;

  constructor(public payload: boolean) {}
}

export type ShippingActions =
    | ToggleShippingForm
    | SetShowShippingForm;
