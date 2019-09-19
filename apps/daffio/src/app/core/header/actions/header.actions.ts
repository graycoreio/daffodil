import { Action } from '@ngrx/store';
import { DaffPalette } from 'libs/design/src';

export enum DaffioHeaderActionTypes {
  HeaderStickAction = "[Daffio-Header] Header Stick Action",
  HeaderUnstickAction = "[Daffio-Header] Header Unstick Action",
  SetHeaderColorAction = "[Daffio-Header] Set Header Color Action"
}

export class HeaderStick implements Action {
  readonly type = DaffioHeaderActionTypes.HeaderStickAction;
}

export class HeaderUnstick implements Action {
  readonly type = DaffioHeaderActionTypes.HeaderUnstickAction;
}

export class SetHeaderColor implements Action {
  readonly type = DaffioHeaderActionTypes.SetHeaderColorAction;

  constructor(public payload: DaffPalette){}
}

export type HeaderActions 
  = HeaderStick 
  | HeaderUnstick
  | SetHeaderColor;