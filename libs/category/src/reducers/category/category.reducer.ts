import { DaffCategoryActionTypes, DaffCategoryActions } from '../../actions/category.actions';
import { CategoryReducerState } from './category-reducer-state.interface';

const initialState: CategoryReducerState = {
  category: null,
  loading: false,
  errors: []
};

export const CategoryReducer = {

  reducer: (state = initialState, action: DaffCategoryActions): CategoryReducerState => {
    switch (action.type) {
      case DaffCategoryActionTypes.CategoryLoadAction:
        return {...state, loading: true};
      case DaffCategoryActionTypes.CategoryLoadSuccessAction:
        return {...state, loading: false, category: action.payload};
      case DaffCategoryActionTypes.CategoryLoadFailureAction:
        return {...state, 
          loading: false, 
          errors: state.errors.concat(new Array(action.payload))
        };
      default:
        return state;
    }
  }
}
