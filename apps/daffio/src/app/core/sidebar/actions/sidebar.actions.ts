import { Action } from '@ngrx/store';

import { DaffSidebarMode } from '@daffodil/design/sidebar';

export enum SidebarActionTypes {
  ToggleSidebarAction = '[Daffio-Sidebar] Toggle Sidebar Action',
  OpenSidebarAction = '[Daffio-Sidebar] Open Sidebar Action',
  CloseSidebarAction = '[Daffio-Sidebar] Close Sidebar Action',
  SetSidebarVisibilityAction = '[Daffio-Sidebar] Set Sidebar Visibility Action',
  SetSidebarStateAction = '[Daffio-Sidebar] Set Sidebar State Action',
  SetSidebarModeAction = '[Daffio-Sidebar] Set Sidebar Mode Action',
  ResetModeAction = '[Daffio-Sidebar] Reset Mode Action'
}

export class ToggleSidebar implements Action {
  readonly type = SidebarActionTypes.ToggleSidebarAction;

  constructor(public payload?: string) {}
}

export class OpenSidebar implements Action {
  readonly type = SidebarActionTypes.OpenSidebarAction;

  constructor(public payload?: string) {}
}

export class CloseSidebar implements Action {
  readonly type = SidebarActionTypes.CloseSidebarAction;
}

export class SetSidebarVisibility implements Action {
  readonly type = SidebarActionTypes.SetSidebarVisibilityAction;

  constructor(public payload: boolean) {}
}

export class SetSidebarState implements Action {
  readonly type = SidebarActionTypes.SetSidebarStateAction;

  constructor(public payload: { mode?: DaffSidebarMode; open?: boolean; kind?: string }) {}
}

export class SetSidebarMode implements Action {
  readonly type = SidebarActionTypes.SetSidebarModeAction;

  constructor(public payload: DaffSidebarMode) {}
}

export class ResetMode implements Action {
  readonly type = SidebarActionTypes.ResetModeAction;
}

export type SidebarActions =
    | ToggleSidebar
    | OpenSidebar
    | CloseSidebar
    | SetSidebarVisibility
    | SetSidebarState
    | SetSidebarMode
    | ResetMode;
