import { Action } from '@ngrx/store';

export enum SidebarActionTypes {
  ToggleSidebarAction = "[Foundation-Sidebar] Toggle Sidebar Action",
  OpenSidebarAction = "[Foundation-Sidebar] Open Sidebar Action",
  CloseSidebarAction = "[Foundation-Sidebar] Close Sidebar Action",
  SetSidebarStateAction = "[Foundation-Sidebar] Set Sidebar State Action"
}

export class ToggleSidebar implements Action {
  readonly type = SidebarActionTypes.ToggleSidebarAction;
}

export class OpenSidebar implements Action {
  readonly type = SidebarActionTypes.OpenSidebarAction;
}

export class CloseSidebar implements Action {
  readonly type = SidebarActionTypes.CloseSidebarAction;
}

export class SetSidebarState implements Action {
  readonly type = SidebarActionTypes.SetSidebarStateAction;
  
  constructor(public payload: boolean){}
}

export type SidebarActions =
    | ToggleSidebar
    | OpenSidebar
    | CloseSidebar
    | SetSidebarState;
