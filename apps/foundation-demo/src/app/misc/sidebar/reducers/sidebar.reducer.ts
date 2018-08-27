import { SidebarActionTypes, SidebarActions } from '../actions/sidebar.actions';

export interface State {
  showSidebar: boolean
}

export const initialState: State = {
  showSidebar: false
};

export function reducer(state = initialState, action: SidebarActions): State {
  switch (action.type) {
    case SidebarActionTypes.ToggleShowSidebarAction:
      return {...state, showSidebar: !state.showSidebar};
    default:
      return state;
  }
}

export const getShowSidebar = (state: State) => state.showSidebar;
