import { ActionReducer } from '@ngrx/store';

import {
  daffApplyRequestsToFilters,
  daffClearFilters,
  DaffProductCollectionRequest,
  DaffProductCollectionResponse,
  daffRemoveRequestsFromFilters,
  daffToggleRequestOnFilters,
} from '@daffodil/product';

import {
  DaffProductCollectionActionKinds,
  DaffProductCollectionActions,
  DaffProductCollectionActionTypes,
} from '../../models/public_api';
import { buildMetadataFromRequest } from './pure/build-metadata-from-request';
import { DaffProductCollectionReducerState } from './state.interface';

export const daffProductCollectionReducerInitialState: DaffProductCollectionReducerState = {
  total_products: 0,
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
};

/**
 * Generates a reducer that will manage the state of a product collection.
 *
 * @param actionTypes The dictionary of action types.
 * @param getRequestFromLoad A getter for retrieving the product collection request from the load actions.
 * @param getResponseFromSuccess A getter for retrieving the product collection response from the load success actions.
 */
export const daffProductCollectionReducerFactory = <
  TActions extends DaffProductCollectionActionKinds = DaffProductCollectionActionKinds
>(
  actionTypes: DaffProductCollectionActionTypes,
  getRequestFromLoad: (action: TActions['load']) => DaffProductCollectionRequest,
  getResponseFromSuccess: (action: TActions['success']) => DaffProductCollectionResponse,
): ActionReducer<DaffProductCollectionReducerState, DaffProductCollectionActions<TActions>> =>
  (
    state: DaffProductCollectionReducerState = daffProductCollectionReducerInitialState,
    action: DaffProductCollectionActions<TActions>,
  ): DaffProductCollectionReducerState => {
    switch (true) {
      case actionTypes.load.includes(action.type):
        return {
          ...daffProductCollectionReducerInitialState,
          ...buildMetadataFromRequest(getRequestFromLoad(action)),
        };

      case actionTypes.changeSize.includes(action.type):
        return {
          ...state,
          page_size: (<TActions['changeSize']>action).pageSize,
        };

      case actionTypes.changePage.includes(action.type):
        return {
          ...state,
          current_page: (<TActions['changePage']>action).currentPage,
        };

      case actionTypes.changeSort.includes(action.type):
        return {
          ...state,
          applied_sort_option: (<TActions['changeSort']>action).sort.option,
          applied_sort_direction: (<TActions['changeSort']>action).sort.direction,
        };

      case actionTypes.replaceFilters.includes(action.type):
        return {
          ...state,
          filters: daffApplyRequestsToFilters((<TActions['replaceFilters']>action).filters, daffClearFilters(state.filters)),
        };

      case actionTypes.applyFilters.includes(action.type):
        return {
          ...state,
          filters: daffApplyRequestsToFilters((<TActions['applyFilters']>action).filters, state.filters),
        };

      case actionTypes.clearFilters.includes(action.type):
        return {
          ...state,
          filters: daffClearFilters(state.filters),
        };

      case actionTypes.removeFilters.includes(action.type):
        return {
          ...state,
          filters: daffRemoveRequestsFromFilters((<TActions['removeFilters']>action).filters, state.filters),
        };

      case actionTypes.toggleFilter.includes(action.type):
        return {
          ...state,
          filters: daffToggleRequestOnFilters((<TActions['toggleFilter']>action).filter, state.filters),
        };

      case actionTypes.success.includes(action.type):
        const response = getResponseFromSuccess(action);
        return {
          ...state,
          total_products: response.productCollectionMetadata.total_products,
          current_page: response.productCollectionMetadata.current_page,
          page_size: response.productCollectionMetadata.page_size,
          filters: response.productCollectionMetadata.filters,
          sort_options: response.productCollectionMetadata.sort_options,
          total_pages: response.productCollectionMetadata.total_pages,
          applied_sort_option: response.productCollectionMetadata.applied_sort_option || state.applied_sort_option,
          applied_sort_direction: response.productCollectionMetadata.applied_sort_direction || state.applied_sort_direction,
        };

      default:
        return state;
    }
  };
