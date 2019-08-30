import { Action } from '@ngrx/store';
import { DaffSidebarMode } from '@daffodil/design';

export enum SidebarActionTypes {
  ToggleSidebarAction = "[Daffio-Sidebar] Toggle Sidebar Action",
  OpenSidebarAction = "[Daffio-Sidebar] Open Sidebar Action",
  CloseSidebarAction = "[Daffio-Sidebar] Close Sidebar Action",
  SetSidebarStateAction = "[Daffio-Sidebar] Set Sidebar State Action",
  SetSidebarModeAction = "[Daffio-Sidebar] Set Sidebar Mode Action"
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

export class SetSidebarMode implements Action {
  readonly type = SidebarActionTypes.SetSidebarModeAction;
  
  constructor(public payload: DaffSidebarMode){}
}


export type SidebarActions =
    | ToggleSidebar
    | OpenSidebar
    | CloseSidebar
    | SetSidebarState
    | SetSidebarMode;
