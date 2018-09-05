import { SidebarActionTypes, SidebarActions } from '../actions/sidebar.actions';

export interface State {
  showSidebar: boolean
}

export const initialState: State = {
  showSidebar: false
};

export function reducer(state = initialState, action: SidebarActions): State {
  switch (action.type) {
    case SidebarActionTypes.ToggleSidebarAction:
      return {...state, showSidebar: !state.showSidebar};
    case SidebarActionTypes.CloseSidebarAction:
      return {...state, showSidebar: false};
    case SidebarActionTypes.OpenSidebarAction: 
      return { ...state, showSidebar: true}
    case SidebarActionTypes.SetSidebarStateAction: 
      return { ...state, showSidebar: action.payload}
    default:
      return state;
  }
}

export const getShowSidebar = (state: State) => state.showSidebar;
