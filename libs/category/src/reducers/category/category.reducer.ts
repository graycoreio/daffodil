import { DaffCategoryActionTypes, DaffCategoryActions } from '../../actions/category.actions';
import { CategoryReducerState } from './category-reducer-state.interface';

const initialState: CategoryReducerState = {
  categoryPageConfigurationState: {
    id: null,
    applied_filters: null,
    applied_sort_option: null,
    applied_sort_direction: null,
    current_page: null,
    page_size: null,
    total_pages: null,
    filters: null,
    sort_options: null
  },
  loading: false,
  errors: []
};

export function categoryReducer(state = initialState, action: DaffCategoryActions): CategoryReducerState {
  switch (action.type) {
    // This reducer must assume the call will be successful, and immediately set the applied filters to state, because the 
    // GetCategory magento call doesn't return currently applied filters. If there is a bug where the wrong filters are somehow
    // applied by Magento, then this will result in a bug. Until Magento returns applied filters with a category call, this is
    // unavoidable.
    case DaffCategoryActionTypes.CategoryLoadAction:
      return { 
        ...state, 
        loading: true,
        categoryPageConfigurationState: {
          ...state.categoryPageConfigurationState,
          ...action.categoryRequest
        }
      };
    // This reducer cannot spread over state, because this would wipe out the applied filters on state. Applied filters are not
    // set here for reasons stated above.
    case DaffCategoryActionTypes.CategoryLoadSuccessAction:
      return { 
        ...state, 
        loading: false,
        categoryPageConfigurationState: {
          ...state.categoryPageConfigurationState,
          id: action.categoryResponse.categoryPageConfigurationState.id,
          current_page: action.categoryResponse.categoryPageConfigurationState.current_page,
          page_size: action.categoryResponse.categoryPageConfigurationState.page_size,
          filters: action.categoryResponse.categoryPageConfigurationState.filters,
          sort_options: action.categoryResponse.categoryPageConfigurationState.sort_options,
          total_pages: action.categoryResponse.categoryPageConfigurationState.total_pages
        }
      };
    case DaffCategoryActionTypes.CategoryLoadFailureAction:
      return {
        ...state,
        loading: false,
        errors: [action.errorMessage]
      };
    default:
      return state;
  }
}
