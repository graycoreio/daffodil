import { Action } from '@ngrx/store';

export enum SidebarActionTypes {
  ToggleSidebarVisibilityAction = "[Foundation-Sidebar] Toggle Show Sidebar Action"
}

export class ToggleSidebarVisibility implements Action {
  readonly type = SidebarActionTypes.ToggleSidebarVisibilityAction;

  constructor() {}
}

export type SidebarActions =
    | ToggleSidebarVisibility;
