import { DaffGenericCategory } from '@daffodil/category';
import { DaffState } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

import { DaffCategoryPageActions } from '../../actions/category-page.actions';
import { DaffCategoryPageActionTypes } from '../../actions/category-page.actions';
import {
  DaffCategoryActionTypes,
  DaffCategoryActions,
} from '../../actions/category.actions';
import { DaffCategoryReducerState } from './category-reducer-state.interface';
import { toggleCategoryFilter } from './toggle-filter/core';

const initialState: DaffCategoryReducerState = {
  categoryPageConfigurationState: {
    id: null,
    filter_requests: [],
    applied_sort_option: null,
    applied_sort_direction: null,
    current_page: null,
    page_size: null,
    total_pages: null,
    filters: [],
    sort_options: {
      default: null,
      options: [],
    },
    total_products: null,
    product_ids: [],
    daffState: DaffState.Stable,
  },
  categoryLoading: false,
  productsLoading: false,
  errors: [],
};

export function daffCategoryReducer<U extends DaffGenericCategory<U>, W extends DaffProduct>(state = initialState, action: DaffCategoryActions<U, W> | DaffCategoryPageActions<U, W>): DaffCategoryReducerState {
  switch (action.type) {
    case DaffCategoryActionTypes.CategoryLoadAction:
      return {
        ...state,
        categoryLoading: true,
        productsLoading: true,
        categoryPageConfigurationState: {
          ...state.categoryPageConfigurationState,
          daffState: DaffState.Resolving,
        },
      };

    // This reducer must assume the call will be successful, and immediately set the applied filters to state, because the
    // GetCategory magento call doesn't return currently applied filters. If there is a bug where the wrong filters are somehow
    // applied by Magento, then this will result in a bug. Until Magento returns applied filters with a category call, this is
    // unavoidable.
    case DaffCategoryPageActionTypes.CategoryPageLoadAction:
      return {
        ...state,
        categoryLoading: true,
        productsLoading: true,
        categoryPageConfigurationState: {
          ...state.categoryPageConfigurationState,
          ...action.request,
          daffState: DaffState.Resolving,
        },
      };
    case DaffCategoryPageActionTypes.CategoryPageChangeSizeAction:
      return {
        ...state,
        productsLoading: true,
        categoryPageConfigurationState: {
          ...state.categoryPageConfigurationState,
          page_size: action.pageSize,
          daffState: DaffState.Mutating,
        },
      };
    case DaffCategoryPageActionTypes.CategoryPageChangeCurrentPageAction:
      return {
        ...state,
        productsLoading: true,
        categoryPageConfigurationState: {
          ...state.categoryPageConfigurationState,
          current_page: action.currentPage,
          daffState: DaffState.Mutating,
        },
      };
    case DaffCategoryPageActionTypes.CategoryPageChangeSortingOptionAction:
      return {
        ...state,
        productsLoading: true,
        categoryPageConfigurationState: {
          ...state.categoryPageConfigurationState,
          applied_sort_option: action.sort.option,
          applied_sort_direction: action.sort.direction,
          daffState: DaffState.Mutating,
        },
      };
    case DaffCategoryPageActionTypes.CategoryPageChangeFiltersAction:
      return {
        ...state,
        productsLoading: true,
        categoryPageConfigurationState: {
          ...state.categoryPageConfigurationState,
          filter_requests: action.filters,
          daffState: DaffState.Mutating,
        },
      };
    case DaffCategoryPageActionTypes.CategoryPageToggleFilterAction:
      return {
        ...state,
        productsLoading: true,
        categoryPageConfigurationState: {
          ...state.categoryPageConfigurationState,
          filter_requests: toggleCategoryFilter(action.filter, state.categoryPageConfigurationState.filter_requests),
          daffState: DaffState.Mutating,
        },
      };
    // This reducer cannot spread over state, because this would wipe out the applied filters on state. Applied filters are not
    // set here for reasons stated above.
    case DaffCategoryActionTypes.CategoryLoadSuccessAction:
    case DaffCategoryPageActionTypes.CategoryPageLoadSuccessAction:
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
          product_ids: action.response.categoryPageConfigurationState.product_ids,
          applied_sort_option: state.categoryPageConfigurationState.applied_sort_option || action.response.categoryPageConfigurationState.sort_options.default,
          daffState: DaffState.Stable,
        },
      };
    case DaffCategoryActionTypes.CategoryLoadFailureAction:
    case DaffCategoryPageActionTypes.CategoryPageLoadFailureAction:
      return {
        ...state,
        categoryLoading: false,
        productsLoading: false,
        errors: [action.errorMessage],
        categoryPageConfigurationState: {
          ...state.categoryPageConfigurationState,
          daffState: DaffState.Stable,
        },
      };
    default:
      return state;
  }
}
