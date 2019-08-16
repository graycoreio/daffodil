import { DaffCategoriesActionTypes, DaffCategoriesActions } from '../actions/categories.actions';

export interface State {
  loading: boolean,
  errors: string[]
}

export const initialState: State = {
  loading: false,
  errors: []
};

export function reducer(state = initialState, action: DaffCategoriesActions): State {
  switch (action.type) {
    case DaffCategoriesActionTypes.CategoriesLoadAction:
      return {...state, loading: true};
    case DaffCategoriesActionTypes.CategoriesLoadSuccessAction:
      return {...state, loading: false};
    case DaffCategoriesActionTypes.CategoriesLoadFailureAction:
      return {...state, 
        loading: false, 
        errors: state.errors.concat(new Array(action.payload))
      };
    default:
      return state;
  }
}

export const getCategoriesLoading = (state: State) => state.loading;

export const getCategoriesErrors = (state: State) => state.errors;
