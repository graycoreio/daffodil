import { DaffNavigationActionTypes, DaffNavigationActions } from '../../actions/navigation.actions';
import { NavigationReducerState } from './navigation-reducer-state.interface';

const initialState: NavigationReducerState = {
  navigationTree: null,
  loading: false,
  errors: []
};

export function reducer(state = initialState, action: DaffNavigationActions): NavigationReducerState {
  switch (action.type) {
    case DaffNavigationActionTypes.NavigationLoadAction:
      return {...state, loading: true};
    case DaffNavigationActionTypes.NavigationLoadSuccessAction:
      return {...state, loading: false, navigationTree: action.payload};
    case DaffNavigationActionTypes.NavigationLoadFailureAction:
      return {...state, 
        loading: false, 
        errors: [action.payload]
      };
    default:
      return state;
  }
}
