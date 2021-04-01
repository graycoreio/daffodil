import {
  DaffGenericCategory,
  toggleCategoryFilter,
  daffApplyRequestsToFilters,
  daffRemoveRequestsFromFilters,
  daffClearFilters,
} from '@daffodil/category';
import { DaffState } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

import {
  DaffCategoryPageFilterActionTypes,
  DaffCategoryPageFilterActions,
} from '../../actions/category-page-filter.actions';
import { DaffCategoryPageActions } from '../../actions/category-page.actions';
import { DaffCategoryPageActionTypes } from '../../actions/category-page.actions';
import {
  DaffCategoryActionTypes,
  DaffCategoryActions,
} from '../../actions/category.actions';
import { DaffCategoryReducerState } from './category-reducer-state.interface';

const initialState: DaffCategoryReducerState = {
  categoryPageMetadata: {
    id: null,
    applied_sort_option: null,
    applied_sort_direction: null,
    current_page: null,
    page_size: null,
    total_pages: null,
    filters: {},
    sort_options: {
      default: null,
      options: [],
    },
    total_products: null,
    product_ids: [],
  },
  daffState: DaffState.Stable,
  categoryLoading: false,
  productsLoading: false,
  errors: [],
};

export function daffCategoryReducer<U extends DaffGenericCategory<U>, W extends DaffProduct>(
  state = initialState,
  action: DaffCategoryActions<U, W> | DaffCategoryPageActions<U, W> | DaffCategoryPageFilterActions,
): DaffCategoryReducerState {
  switch (action.type) {

    case DaffCategoryActionTypes.CategoryLoadAction:
      return {
        ...state,
        categoryLoading: true,
        productsLoading: true,
        daffState: DaffState.Resolving,
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
        daffState: DaffState.Resolving,
        categoryPageMetadata: {
          ...state.categoryPageMetadata,
          ...action.request,
        },
      };

    case DaffCategoryPageActionTypes.CategoryPageChangeSizeAction:
      return {
        ...state,
        productsLoading: true,
        daffState: DaffState.Mutating,
        categoryPageMetadata: {
          ...state.categoryPageMetadata,
          page_size: action.pageSize,
        },
      };

    case DaffCategoryPageActionTypes.CategoryPageChangeCurrentPageAction:
      return {
        ...state,
        productsLoading: true,
        daffState: DaffState.Mutating,
        categoryPageMetadata: {
          ...state.categoryPageMetadata,
          current_page: action.currentPage,
        },
      };

    case DaffCategoryPageActionTypes.CategoryPageChangeSortingOptionAction:
      return {
        ...state,
        productsLoading: true,
        daffState: DaffState.Mutating,
        categoryPageMetadata: {
          ...state.categoryPageMetadata,
          applied_sort_option: action.sort.option,
          applied_sort_direction: action.sort.direction,
        },
      };

    case DaffCategoryPageFilterActionTypes.CategoryPageChangeFiltersAction:
    case DaffCategoryPageFilterActionTypes.CategoryPageReplaceFiltersAction:
      return {
        ...state,
        productsLoading: true,
        daffState: DaffState.Mutating,
        categoryPageMetadata: {
          ...state.categoryPageMetadata,
          filters: daffApplyRequestsToFilters(action.filters, daffClearFilters(state.categoryPageMetadata.filters)),
        },
      };

    case DaffCategoryPageFilterActionTypes.CategoryPageApplyFiltersAction:
      return {
        ...state,
        productsLoading: true,
        daffState: DaffState.Mutating,
        categoryPageMetadata: {
          ...state.categoryPageMetadata,
          filters: daffApplyRequestsToFilters(action.filters, state.categoryPageMetadata.filters),
        },
      };

    case DaffCategoryPageFilterActionTypes.CategoryPageClearFiltersAction:
      return {
        ...state,
        productsLoading: true,
        daffState: DaffState.Mutating,
        categoryPageMetadata: {
          ...state.categoryPageMetadata,
          filters: {},
        },
      };

    case DaffCategoryPageFilterActionTypes.CategoryPageRemoveFiltersAction:
      return {
        ...state,
        productsLoading: true,
        daffState: DaffState.Mutating,
        categoryPageMetadata: {
          ...state.categoryPageMetadata,
          filters: daffRemoveRequestsFromFilters(action.filters, state.categoryPageMetadata.filters),
        },
      };

    case DaffCategoryPageFilterActionTypes.CategoryPageToggleFilterAction:
      return {
        ...state,
        productsLoading: true,
        daffState: DaffState.Mutating,
        categoryPageMetadata: {
          ...state.categoryPageMetadata,
          filters: toggleCategoryFilter(action.filter, state.categoryPageMetadata.filters),
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
        daffState: DaffState.Stable,
        categoryPageMetadata: {
          ...state.categoryPageMetadata,
          id: action.response.categoryPageMetadata.id,
          current_page: action.response.categoryPageMetadata.current_page,
          page_size: action.response.categoryPageMetadata.page_size,
          filters: action.response.categoryPageMetadata.filters,
          sort_options: action.response.categoryPageMetadata.sort_options,
          total_pages: action.response.categoryPageMetadata.total_pages,
          total_products: action.response.categoryPageMetadata.total_products,
          product_ids: action.response.categoryPageMetadata.product_ids,
          applied_sort_option: state.categoryPageMetadata.applied_sort_option || action.response.categoryPageMetadata.sort_options.default,
        },
      };

    case DaffCategoryActionTypes.CategoryLoadFailureAction:
    case DaffCategoryPageActionTypes.CategoryPageLoadFailureAction:
      return {
        ...state,
        categoryLoading: false,
        productsLoading: false,
        errors: [action.errorMessage],
        daffState: DaffState.Stable,
      };
    default:
      return state;
  }
}
