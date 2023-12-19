import { DaffSidebarMode } from '@daffodil/design/sidebar';

import {
  SidebarActionTypes,
  SidebarActions,
} from '../actions/sidebar.actions';

export interface State {
  showSidebar: boolean;
  mode: DaffSidebarMode;
}

export const initialState: State = {
  showSidebar: false,
  mode: 'under',
};

export function reducer(state = initialState, action: SidebarActions): State {
  switch (action.type) {
    case SidebarActionTypes.ToggleSidebarAction:
      return { ...state, showSidebar: !state.showSidebar };
    case SidebarActionTypes.CloseSidebarAction:
      return { ...state, showSidebar: false };
    case SidebarActionTypes.OpenSidebarAction:
      return { ...state, showSidebar: true };
    case SidebarActionTypes.SetSidebarVisibilityAction:
      return { ...state, showSidebar: action.payload };
    case SidebarActionTypes.SetSidebarStateAction:
      return {
        ...state,
        mode: action.payload?.mode ?? state.mode,
        showSidebar: action.payload?.open ?? state.showSidebar,
      };
    case SidebarActionTypes.SetSidebarModeAction:
      return { ...state, mode: action.payload };
    case SidebarActionTypes.ResetModeAction:
      return { ...state, mode: initialState.mode };
    default:
      return state;
  }
}

export const getShowSidebar = (state: State) => state.showSidebar;
export const getMode = (state: State) => state.mode;
