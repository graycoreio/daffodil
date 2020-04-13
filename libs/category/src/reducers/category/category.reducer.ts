import { DaffProduct } from '@daffodil/product';

import { DaffCategoryActionTypes, DaffCategoryActions } from '../../actions/category.actions';
import { DaffCategoryReducerState } from './category-reducer-state.interface';
import { toggleCategoryFilter } from './toggle-filter/core';
import { DaffCategoryRequest } from '../../models/requests/category-request';
import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';
import { DaffGenericCategory } from '../../models/generic-category';

const initialState: DaffCategoryReducerState<any, any> = {
	categoryPageConfigurationState: {
    id: null,
		filter_requests: [],
    applied_sort_option: null,
    applied_sort_direction: null,
    current_page: null,
    page_size: null,
    total_pages: null,
    filters: [],
		sort_options: [],
		total_products: null,
		product_ids: []
	},
	categoryLoading: false,
	productsLoading: false,
  errors: []
};

export function daffCategoryReducer<T extends DaffCategoryRequest, U extends DaffGenericCategory<U>, V extends DaffCategoryPageConfigurationState<T>, W extends DaffProduct>
	(state = initialState, action: DaffCategoryActions<T, U, V, W>): DaffCategoryReducerState<T, V> {
  switch (action.type) {
    // This reducer must assume the call will be successful, and immediately set the applied filters to state, because the 
    // GetCategory magento call doesn't return currently applied filters. If there is a bug where the wrong filters are somehow
    // applied by Magento, then this will result in a bug. Until Magento returns applied filters with a category call, this is
    // unavoidable.
    case DaffCategoryActionTypes.CategoryLoadAction:
      return { 
        ...state, 
				categoryLoading: true,
				productsLoading: true,
        categoryPageConfigurationState: {
          ...state.categoryPageConfigurationState,
          ...action.request
				}
			};
		case DaffCategoryActionTypes.ChangeCategoryPageSizeAction:
			return { 
				...state, 
				productsLoading: true,
				categoryPageConfigurationState: {
					...state.categoryPageConfigurationState,
					page_size: action.pageSize
				}
			};
		case DaffCategoryActionTypes.ChangeCategoryCurrentPageAction:
			return { 
				...state, 
				productsLoading: true,
				categoryPageConfigurationState: {
					...state.categoryPageConfigurationState,
					current_page: action.currentPage
				}
			};
		case DaffCategoryActionTypes.ChangeCategorySortingOptionAction:
			return { 
				...state, 
				productsLoading: true,
				categoryPageConfigurationState: {
					...state.categoryPageConfigurationState,
					applied_sort_option: action.sort.option,
					applied_sort_direction: action.sort.direction
				}
			};
		case DaffCategoryActionTypes.ChangeCategoryFiltersAction:
			return { 
				...state, 
				productsLoading: true,
				categoryPageConfigurationState: {
					...state.categoryPageConfigurationState,
					filter_requests: action.filters
				}
			};
		case DaffCategoryActionTypes.ToggleCategoryFilterAction:
			return {
				...state,
				productsLoading: true,
				categoryPageConfigurationState: {
					...state.categoryPageConfigurationState,
					filter_requests: toggleCategoryFilter(action.filter, state.categoryPageConfigurationState.filter_requests)
				}
			}
    // This reducer cannot spread over state, because this would wipe out the applied filters on state. Applied filters are not
    // set here for reasons stated above.
    case DaffCategoryActionTypes.CategoryLoadSuccessAction:
      return { 
        ...state, 
				categoryLoading: false,
				productsLoading: false,
        categoryPageConfigurationState: {
          ...state.categoryPageConfigurationState,
          id: action.response.categoryPageConfigurationState.id,
          current_page: action.response.categoryPageConfigurationState.current_page,
          page_size: action.response.categoryPageConfigurationState.page_size,
          filters: action.response.categoryPageConfigurationState.filters,
          sort_options: action.response.categoryPageConfigurationState.sort_options,
					total_pages: action.response.categoryPageConfigurationState.total_pages,
					total_products: action.response.categoryPageConfigurationState.total_products,
					product_ids: action.response.categoryPageConfigurationState.product_ids
        }
      };
    case DaffCategoryActionTypes.CategoryLoadFailureAction:
      return {
        ...state,
				categoryLoading: false,
				productsLoading: false,
        errors: [action.errorMessage]
      };
    default:
      return state;
  }
}
