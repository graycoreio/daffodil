import { HeaderActionTypes, HeaderActions } from '../actions/header.actions';

export interface State {
  showSidebar: boolean
}

export const initialState: State = {
  showSidebar: false
};

export function reducer(state = initialState, action: HeaderActions): State {
  switch (action.type) {
    case HeaderActionTypes.ToggleShowSidebarAction:
      return {...state, showSidebar: !state.showSidebar};
    default:
      return state;
  }
}

export const getShowSidebar = (state: State) => state.showSidebar;
