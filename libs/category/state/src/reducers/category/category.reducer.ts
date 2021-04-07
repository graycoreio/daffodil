import {
  DaffGenericCategory,
  daffApplyRequestsToFilters,
  daffRemoveRequestsFromFilters,
  daffClearFilters,
  daffToggleRequestOnFilters,
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

    case DaffCategoryPageFilterActionTypes.CategoryPagePreapplyFiltersAction:
      return {
        ...state,
        categoryPageMetadata: {
          ...state.categoryPageMetadata,
          filters: action.filters,
        },
      };

    case DaffCategoryPageFilterActionTypes.CategoryPageChangeFiltersAction:
    case DaffCategoryPageFilterActionTypes.CategoryPageReplaceFiltersAction:
    case DaffCategoryPageFilterActionTypes.CategoryPageApplyFiltersAction:
    case DaffCategoryPageFilterActionTypes.CategoryPageClearFiltersAction:
    case DaffCategoryPageFilterActionTypes.CategoryPageRemoveFiltersAction:
    case DaffCategoryPageFilterActionTypes.CategoryPageToggleFilterAction:
      return {
        ...state,
        productsLoading: true,
        daffState: DaffState.Mutating,
      };

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
