import { Action } from '@ngrx/store';

export enum SidebarActionTypes {
  ToggleShowSidebarAction = "[Foundation-Sidebar] Toggle Show Sidebar Action"
}

export class ToggleShowSidebar implements Action {
  readonly type = SidebarActionTypes.ToggleShowSidebarAction;

  constructor() {}
}

export type SidebarActions =
    | ToggleShowSidebar;
