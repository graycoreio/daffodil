import { SidebarActionTypes, SidebarActions } from '../actions/sidebar.actions';
import { DaffSidebarMode } from '@daffodil/design';

export interface State {
  showSidebar: boolean,
  mode: DaffSidebarMode
}

export const initialState: State = {
  showSidebar: false,
  mode: "push"
};

export function reducer(state = initialState, action: SidebarActions): State {
  switch (action.type) {
    case SidebarActionTypes.ToggleSidebarAction:
      return { ...state, showSidebar: !state.showSidebar };
    case SidebarActionTypes.CloseSidebarAction:
      return { ...state, showSidebar: false };
    case SidebarActionTypes.OpenSidebarAction:
      return { ...state, showSidebar: true }
    case SidebarActionTypes.SetSidebarStateAction:
      return { ...state, showSidebar: action.payload }
    case SidebarActionTypes.SetSidebarModeAction:
      return { ...state, mode: action.payload }
      case SidebarActionTypes.ResetModeAction:
        return { ...state, mode: initialState.mode }
    default:
      return state;
  }
}

export const getShowSidebar = (state: State) => state.showSidebar;
export const getMode = (state: State) => state.mode;