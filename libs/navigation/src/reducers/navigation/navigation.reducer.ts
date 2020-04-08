import { DaffNavigationActionTypes, DaffNavigationActions } from '../../actions/navigation.actions';
import { DaffNavigationReducerState } from './navigation-reducer-state.interface';
import { DaffGenericNavigationTree } from '../../models/generic-navigation-tree';

export const initialState: DaffNavigationReducerState<any> = {
	navigationTree: null,
	loading: false,
	errors: []
};

export function daffNavigationReducer <T extends DaffGenericNavigationTree<T>>
	(state: DaffNavigationReducerState<T> = initialState, action: DaffNavigationActions<T>): DaffNavigationReducerState<T> {
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
