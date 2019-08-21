import { DaffCategoryActionTypes, DaffCategoryActions } from '../../actions/category.actions';
import { CategoryReducerState } from './category-reducer-state.interface';

const initialState: CategoryReducerState = {
  selectedCategoryId: null,
  loading: false,
  errors: []
};

export function categoryReducer(state = initialState, action: DaffCategoryActions): CategoryReducerState {
  switch (action.type) {
    case DaffCategoryActionTypes.CategoryLoadAction:
      return {...state, loading: true};
    case DaffCategoryActionTypes.CategoryLoadSuccessAction:
      return {...state, loading: false, selectedCategoryId: action.payload.id};
    case DaffCategoryActionTypes.CategoryLoadFailureAction:
      return {...state, 
        loading: false, 
        errors: state.errors.concat(new Array(action.payload))
      };
    default:
      return state;
  }
}
