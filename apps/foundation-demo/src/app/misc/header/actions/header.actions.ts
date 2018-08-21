import { Action } from '@ngrx/store';

export enum HeaderActionTypes {
  ToggleShowSidebarAction = "[Foundation-Header] Toggle Show Sidebar Action"
}

export class ToggleShowSidebar implements Action {
  readonly type = HeaderActionTypes.ToggleShowSidebarAction;

  constructor() {}
}

export type HeaderActions =
    | ToggleShowSidebar;
