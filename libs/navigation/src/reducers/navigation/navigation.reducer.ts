import { DaffNavigationActionTypes, DaffNavigationActions } from '../../actions/navigation.actions';
import { NavigationReducerState } from './navigation-reducer-state.interface';
import { DaffNavigationTree } from '../../models/navigation-tree';

export const initialState: NavigationReducerState<any> = {
	navigationTree: null,
	loading: false,
	errors: []
};

export function daffNavigationReducer <T extends DaffNavigationTree<T>>
	(state: NavigationReducerState<T> = initialState, action: DaffNavigationActions<T>): NavigationReducerState<T> {
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
