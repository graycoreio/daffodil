import { DaffGenericCategory } from '@daffodil/category';
import {
  daffApplyRequestsToFilters,
  daffClearFilters,
  DaffProduct,
  daffRemoveRequestsFromFilters,
  daffToggleRequestOnFilters,
} from '@daffodil/product';
import {
  daffProductCollectionReducerInitialState,
  getProductCollectionStateAdapter,
} from '@daffodil/product/state';

import {
  DaffCategoryPageProductCollectionActionTypes,
  DaffCategoryPageProductCollectionActions,
} from '../../actions/category-page-filter.actions';
import { DaffCategoryPageActions } from '../../actions/category-page.actions';
import { DaffCategoryPageActionTypes } from '../../actions/category-page.actions';
import { DaffCategoryActions } from '../../actions/category.actions';
import { DaffCategoryPageMetadataReducerState } from './state.interface';

export const initialState: DaffCategoryPageMetadataReducerState = {
  ...daffProductCollectionReducerInitialState,
  id: null,
};

/**
 * Returns the state for category data except for category entities.
 */
export function daffCategoryPageMetadataReducer<U extends DaffGenericCategory<U>, W extends DaffProduct>(
  state = initialState,
  action: DaffCategoryActions<U, W> | DaffCategoryPageActions<U, W> | DaffCategoryPageProductCollectionActions,
): DaffCategoryPageMetadataReducerState {
  const adapter = getProductCollectionStateAdapter<DaffCategoryPageMetadataReducerState>();
  switch (action.type) {
    case DaffCategoryPageActionTypes.CategoryPageLoadAction:
    case DaffCategoryPageActionTypes.CategoryPageLoadByUrlAction:
      return {
        ...adapter.storeRequest(action.request, initialState),
        id: null,
      };

    case DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeSizeAction:
      return adapter.setPageSize(action.pageSize, state);

    case DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeCurrentPageAction:
      return adapter.setCurrentPage(action.currentPage, state);

    case DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeSortingOptionAction:
      return adapter.setSort(action.sort.option, action.sort.direction, state);

    case DaffCategoryPageProductCollectionActionTypes.CategoryPageChangeFiltersAction:
    case DaffCategoryPageProductCollectionActionTypes.CategoryPageReplaceFiltersAction:
      return adapter.setFilters(daffApplyRequestsToFilters(action.filters, daffClearFilters(state.filters)), state);

    case DaffCategoryPageProductCollectionActionTypes.CategoryPageApplyFiltersAction:
      return adapter.setFilters(daffApplyRequestsToFilters(action.filters, state.filters), state);

    case DaffCategoryPageProductCollectionActionTypes.CategoryPageClearFiltersAction:
      return adapter.setFilters(daffClearFilters(state.filters), state);

    case DaffCategoryPageProductCollectionActionTypes.CategoryPageRemoveFiltersAction:
      return adapter.setFilters(daffRemoveRequestsFromFilters(action.filters, state.filters), state);

    case DaffCategoryPageProductCollectionActionTypes.CategoryPageToggleFilterAction:
      return adapter.setFilters(daffToggleRequestOnFilters(action.filter, state.filters), state);

    case DaffCategoryPageActionTypes.CategoryPageLoadSuccessAction:
      return {
        ...adapter.setMetadata({
          currentPage: action.response.categoryPageMetadata.currentPage,
          pageSize: action.response.categoryPageMetadata.pageSize,
          filters: action.response.categoryPageMetadata.filters,
          sortOptions: action.response.categoryPageMetadata.sortOptions,
          totalPages: action.response.categoryPageMetadata.totalPages,
          count: action.response.categoryPageMetadata.count,
          ids: action.response.categoryPageMetadata.ids,
          appliedSortOption: action.response.categoryPageMetadata.appliedSortOption || action.response.categoryPageMetadata.sortOptions.default,
          appliedSortDirection: action.response.categoryPageMetadata.appliedSortDirection,
        }, state),
        id: action.response.categoryPageMetadata.id,
      };

    default:
      return state;
  }
}
