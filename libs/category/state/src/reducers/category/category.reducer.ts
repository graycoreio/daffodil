import { DaffGenericCategory } from '@daffodil/category';
import { DaffState } from '@daffodil/core/state';
import {
  daffApplyRequestsToFilters,
  daffClearFilters,
  DaffProduct,
  daffRemoveRequestsFromFilters,
  daffToggleRequestOnFilters,
} from '@daffodil/product';

import {
  DaffCategoryPageFilterActionTypes,
  DaffCategoryPageFilterActions,
} from '../../actions/category-page-filter.actions';
import { DaffCategoryPageActions } from '../../actions/category-page.actions';
import { DaffCategoryPageActionTypes } from '../../actions/category-page.actions';
import { DaffCategoryActions } from '../../actions/category.actions';
import { DaffCategoryReducerState } from './category-reducer-state.interface';
import { buildMetadataFromRequest } from './pure/build-metadata-from-request';

export const initialState: DaffCategoryReducerState = {
  categoryPageMetadata: {
    id: null,
    appliedSortOption: null,
    appliedSortDirection: null,
    currentPage: null,
    pageSize: null,
    totalPages: null,
    filters: {},
    sortOptions: {
      default: null,
      options: [],
    },
    count: null,
    ids: [],
  },
  daffState: DaffState.Stable,
  categoryLoading: false,
  productsLoading: false,
  errors: [],
};

/**
 * Returns the state for category data except for category entities.
 */
export function daffCategoryReducer<U extends DaffGenericCategory<U>, W extends DaffProduct>(
  state = initialState,
  action: DaffCategoryActions<U, W> | DaffCategoryPageActions<U, W> | DaffCategoryPageFilterActions,
): DaffCategoryReducerState {
  switch (action.type) {
    case DaffCategoryPageActionTypes.CategoryPageLoadAction:
    case DaffCategoryPageActionTypes.CategoryPageLoadByUrlAction:
      return {
        ...state,
        categoryLoading: true,
        productsLoading: true,
        daffState: DaffState.Resolving,
        categoryPageMetadata: {
          ...initialState.categoryPageMetadata,
          ...buildMetadataFromRequest(action.request),
          id: null,
        },
      };

    case DaffCategoryPageActionTypes.CategoryPageChangeSizeAction:
      return {
        ...state,
        productsLoading: true,
        daffState: DaffState.Mutating,
        categoryPageMetadata: {
          ...state.categoryPageMetadata,
          pageSize: action.pageSize,
        },
      };

    case DaffCategoryPageActionTypes.CategoryPageChangeCurrentPageAction:
      return {
        ...state,
        productsLoading: true,
        daffState: DaffState.Mutating,
        categoryPageMetadata: {
          ...state.categoryPageMetadata,
          currentPage: action.currentPage,
        },
      };

    case DaffCategoryPageActionTypes.CategoryPageChangeSortingOptionAction:
      return {
        ...state,
        productsLoading: true,
        daffState: DaffState.Mutating,
        categoryPageMetadata: {
          ...state.categoryPageMetadata,
          appliedSortOption: action.sort.option,
          appliedSortDirection: action.sort.direction,
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
          filters: daffClearFilters(state.categoryPageMetadata.filters),
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
          filters: daffToggleRequestOnFilters(action.filter, state.categoryPageMetadata.filters),
        },
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
          currentPage: action.response.categoryPageMetadata.currentPage,
          pageSize: action.response.categoryPageMetadata.pageSize,
          filters: action.response.categoryPageMetadata.filters,
          sortOptions: action.response.categoryPageMetadata.sortOptions,
          totalPages: action.response.categoryPageMetadata.totalPages,
          count: action.response.categoryPageMetadata.count,
          ids: action.response.categoryPageMetadata.ids,
          appliedSortOption: action.response.categoryPageMetadata.appliedSortOption || action.response.categoryPageMetadata.sortOptions.default,
          appliedSortDirection: action.response.categoryPageMetadata.appliedSortDirection,
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
